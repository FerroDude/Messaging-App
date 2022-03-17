import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import { auth } from '../../firebase';
import moment from 'moment';

const Message = ({ user, message }) => {
  const [currentUser] = useAuthState(auth);

  const TypeOfMessage = user === currentUser.email ? Sender : Receiver;

  return (
    <Container>
      <TypeOfMessage>
        {message.message}
        <TimeStamp>
          {message.timestamp ? moment(message.timestamp).format('LT') : '...'}
        </TimeStamp>
      </TypeOfMessage>
    </Container>
  );
};

export default Message;

const Container = styled.div``;

const MessageElement = styled.p`
  width: fit-content;
  word-wrap: break-word;
  max-width: 40vw;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
`;

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: lightblue;
`;

const Receiver = styled(MessageElement)`
  background-color: whitesmoke;
  text-align: left;
`;

const TimeStamp = styled.span`
  color: grey;
  padding: 9px;
  font-size: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
  min-width: 60px;
  text-align: right;
`;
