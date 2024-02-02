import React from 'react';
import BirdList from './BirdList';

const AlphabeticalList = ({ birdData }) => {
  // Regrouper les oiseaux par la première lettre
  const birdsByAlphabet = {};
  birdData.forEach((bird) => {
    const firstLetter = bird.name.charAt(0).toUpperCase();
    if (!birdsByAlphabet[firstLetter]) {
      birdsByAlphabet[firstLetter] = [];
    }
    birdsByAlphabet[firstLetter].push(bird.name);
  });

  return (
    <div>
      {Object.keys(birdsByAlphabet).map((letter) => (
        <div key={letter}>
          <h2>{letter}</h2>
          <BirdList birds={birdsByAlphabet[letter]} />
        </div>
      ))}
    </div>
  );
};

export default AlphabeticalList;