import React, { useState } from 'react';
import Button from './Btn'; 

const ContainerButton = ({ onClickDelete, onClickSeeResults }) => {
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [seeResultsClicked, setSeeResultsClicked] = useState(false);

  const handleDeleteClick = () => {
    setDeleteClicked(!deleteClicked);
    onClickDelete();
  };

  const handleSeeResultsClick = () => {
    setSeeResultsClicked(!seeResultsClicked);
    onClickSeeResults();
  };

  return (
    <div className="flex justify-center space-x-4">
      <Button onClick={handleDeleteClick} className={`bg-vert-naturaliste text-blanc-plume ${deleteClicked ? 'clicked' : ''}`}>
        Supprimer les filtres
      </Button>

      <Button onClick={handleSeeResultsClick} className={`bg-bleu-ciel text-noir-corbeau ${seeResultsClicked ? 'clicked' : ''}`}>
        Voir les résultats
      </Button>
    </div>
  );
};

export default ContainerButton;
