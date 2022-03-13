import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Button } from '@mui/material';
import { auth, provider } from '../firebase';

const login = () => {
  const handleSignIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="/Findmore.png" />
        <Button onClick={handleSignIn} variant="outlined" color="inherit">
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  width: 200px;
  margin-bottom: 50px;
`;
