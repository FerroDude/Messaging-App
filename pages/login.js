import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const login = () => {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <h1>Login Page</h1>
    </Container>
  );
};

export default login;

const Container = styled.div``;
