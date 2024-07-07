// import React from 'react';
import AppCp1 from './AppCp1.tsx';
import AppCp2 from './Appcp2.tsx';

const SecondPage = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'flex-start',
      padding: '20px',  // Example padding
      backgroundColor: '#f0f0f0',  // Example background color
    }}>
      <AppCp2 />
      <AppCp1 />
    </div>
  );
};

export default SecondPage;
