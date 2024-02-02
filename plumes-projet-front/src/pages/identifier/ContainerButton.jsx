import { useState } from 'react';
import Button from "../../components/common/Button"

const ContainerButton = ({ onClickDelete, onClickSeeResults }) => {

  return (
    <div className="flex justify-center space-x-4">
      <div className="flex justify-center space-x-4">
        <Button handleClick={onClickDelete}>Supprimer les filtres</Button>
        <Button handleClick={onClickSeeResults}>Voir le résultat(s)</Button>
      </div>
    </div>
  );
};

export default ContainerButton;
