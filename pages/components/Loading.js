import React from 'react';
import { Circle } from 'better-react-spinkit';

const Loading = () => {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div>
        <img
          src="/FindmoreConsulting.svg"
          alt="Logo"
          style={{ marginBottom: 10, width: '200px' }}
        />
        <Circle color="black" size={60} />
      </div>
    </center>
  );
};

export default Loading;
