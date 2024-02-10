import React from 'react';

// Composant Abecedaire qui affiche l'alphabet pour filtrer les données par lettre
const Abecedaire = ({ alphabet, filterByLetter, selectedLetter }) => {
  return (
    // Conteneur fixe pour afficher l'alphabet à droite de l'écran
    <div className="fixed inset-y-0 right-0 flex flex-col items-end p-1 bg-ui-vert-naturaliste">
      {/* Boucle à travers chaque lettre de l'alphabet */}
      {alphabet.map((letter, index) => (
        // Bouton pour chaque lettre de l'alphabet
        <button
          key={index}
          // Classe dynamique pour le style en fonction de si la lettre est sélectionnée ou non
          className={`m-0.5 text-xs ${
            selectedLetter === letter
              ? "font-bold text-ui-bleu-ciel underline transform scale-110"
              : "text-ui-bleu-ciel"
          } hover:bg-bleu-ciel transition-colors duration-300`}
          // Action de filtrage lorsqu'on clique sur le bouton
          onClick={() => filterByLetter(letter)}
        >
          {/* Affichage de la lettre à l'intérieur du bouton */}
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Abecedaire;

