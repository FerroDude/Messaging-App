import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as EmailValidator from 'email-validator';

const Sidebar = () => {
  const handleCreateChat = () => {
    //create chat
    const input = prompt('Enter an email address to chat with');
    if (!input) {
      return null;
    }
    if (!EmailValidator.validate(input)) {
      //add chat into db chats collection
    }
  };

  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
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
    </Container>
  );
};

export default Sidebar;

const Container = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SidebarButton = styled(Button)`
  width: 100%;
  color: black;
  font-weight: bold;

  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
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
