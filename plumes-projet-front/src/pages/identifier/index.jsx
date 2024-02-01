import React from 'react';
import Typography from '../../components/common/Typography';

const IdentifierPage = () => {
  const pageStyle = {
    background: '#2D4941',
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#F8F8F8',
  };

  const headingStyle = {
    fontFamily: 'Poppins',
    fontSize: '2rem',  // Ajustez la taille du texte en fonction de vos préférences
  };

  return (
    <div style={pageStyle}>
      <Typography tag="h2" variant="blanc-plume" style={headingStyle}>
        Identifier ma plume
      </Typography>
    </div>
  );
};

export default IdentifierPage;
