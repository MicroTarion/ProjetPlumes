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
      
      <Button></Button>
    </div>
  );
};

export default ContainerButton;
