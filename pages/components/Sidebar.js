import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as EmailValidator from 'email-validator';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import Chat from './Chat.js';
import Router from 'next/router';

const Sidebar = () => {
  const [user] = useAuthState(auth);

  if (user) {
    const chatRef = db
      .collection('chats')
      ?.where('users', 'array-contains', user.email);
  }

  const [chatsSnapshot] = useCollection(chatRef);

  const handleCreateChat = () => {
    //create chat
    const input = prompt('Enter an email address to chat with');
    if (!input) {
      return null;
    }
    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExists(input) &&
      input !== user.email
    ) {
      db.collection('chats').add({
        users: [user.email, input]
      });
    }
  };

  const chatAlreadyExists = (email) =>
    !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === email)?.length > 0
    );

  return (
    <Container>
      <Header>
        <UserAvatar
          src={user?.photoURL}
          onClick={() => {
            auth.signOut();
            Router.push('/');
          }}
        />
        <IconsContainer>
          <IconButton>
            <ChatIcon onClick={handleCreateChat} />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search" />
      </Search>
      <SidebarButton onClick={handleCreateChat}>Start new chat</SidebarButton>
      {chatsSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  flex: 0.45;
  border-right: 1px solid whitesmoke;
  height: 100vh;
  min-width: 300px;
  max-width: 350px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: 0;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SidebarButton = styled(Button)`
  && {
    width: 100%;
    color: black;
    font-weight: bold;

    &&& {
      border-top: 1px solid whitesmoke;
      border-bottom: 1px solid whitesmoke;
    }
  }
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

const IconsContainer = styled.div``;
