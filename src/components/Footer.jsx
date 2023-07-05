import React from 'react';

const Footer = () => {
  const wrapperStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    bottom:'20px',
    top:'20px',
  

  };

  const leftDivStyles = {
    marginLeft: '60px',
   
  };

  const rightDivStyles = {
    marginRight: '60px',
  };

  // Conditionally apply media query styles
  if (window.innerWidth <= 550) {
    wrapperStyles.overflowX='hidden';
    leftDivStyles.marginLeft = '10px';
    leftDivStyles.fontSize = '11px';
    rightDivStyles.marginRight = '10px';
    rightDivStyles.fontSize = '11px';
    
  }

  return (
    <div style={wrapperStyles}>
      <div style={leftDivStyles}>
        2023 &copy; Copyright Sudeep ENT Hospital
      </div>
      <div style={rightDivStyles}>Developed by TrinITy</div>
    </div>
  );
};

export default Footer;
