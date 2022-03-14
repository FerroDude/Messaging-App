import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import ChatScreen from '../components/ChatScreen';
import { db } from '../../firebase';

const Chat = ({ chat, messages }) => {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen />
      </ChatContainer>
    </Container>
  );
};

export default Chat;

export async function getServerSideProps(context) {
  const ref = db.collection('chats').doc(context.query.id);
  const messagesRes = await ref
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .get();

  const messages = messagesRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    .map((message) => ({
      ...message,
      timestamp: message.timestamp.toDate().getTime()
    }));

  const chatRes = await ref.get();
  const chat = {
    id: chatRes.id,
    ...chatRes.data()
  };

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat
    }
  };
}

const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
