import React from 'react';

const BirdList = ({ birds }) => {
  return (
    <ul>
      {birds.map((bird, index) => (
        <li key={index}>{bird}</li>
      ))}
    </ul>
  );
};

export default BirdList;