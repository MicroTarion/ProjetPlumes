import React from 'react';

const IdentifierPage = () => {
  const pageStyle = {
    background: '#2D4941',
    height: '10vh',  // Réduire la hauteur à 3/4 de l'écran (75% de la vue)
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
  };

  const headingStyle = {
    fontFamily: 'Poppins',
    fontSize: '18px',
  };

  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>Identifier ma plume</h2>
      
      
    </div>
  );
};

export default IdentifierPage;

