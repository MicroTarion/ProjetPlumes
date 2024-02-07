import React from 'react';

const Abecedaire = ({ alphabet, filterByLetter, selectedLetter }) => {
  return (
    <div className="fixed inset-y-0 right-0 flex flex-col items-end p-1 bg-ui-vert-naturaliste">
      {alphabet.map((letter, index) => (
        <button
          key={index}
          className={`m-0.5 text-xs ${
            selectedLetter === letter
              ? "font-bold text-ui-bleu-ciel underline transform scale-110"
              : "text-ui-bleu-ciel"
          } hover:bg-bleu-ciel transition-colors duration-300`}
          onClick={() => filterByLetter(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Abecedaire;
