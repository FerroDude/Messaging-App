import React from 'react';
import { Circle } from 'better-react-spinkit';

const Loading = () => {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div>
        <img src="/Findmore.png" alt="Logo" style={{ marginBottom: 10 }} />
        <Circle color="black" size={60} />
      </div>
    </center>
  );
};

export default Loading;
