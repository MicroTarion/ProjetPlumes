import Typography from "../common/Typography";
import React, { useState } from 'react';

const Button = ({handleClick, children}) => {

  return (      
  <button
    onClick={handleClick}
    className={`w-42 h-16 m-4 p-4 bg-blanc-plume text-vert-naturaliste border border-solid border-noir-corbeau cursor-pointer
    hover:bg--800 hover:border-2
    focus:bg-vert-naturaliste focus:text-blanc-plume 
    `}

  >
    {children}
  </button>)
}

const Btn = ({ onClickDelete, onClickSeeResults }) => {
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [seeResultsClicked, setSeeResultsClicked] = useState(false);

  const handleDeleteClick = () => {
    // Inverser l'état du clic
    setDeleteClicked(!deleteClicked);

    // Appeler la fonction fournie onClickDelete
    onClickDelete();
  };

  const handleSeeResultsClick = () => {
    // Inverser l'état du clic pour le bouton "Voir le résultat(s)"
    setSeeResultsClicked(!seeResultsClicked);

    // Appeler la fonction fournie onClickSeeResults
    onClickSeeResults();
  };

  return (
    <div className="flex justify-center space-x-4">

      <Button handleClick={handleDeleteClick}>Supprimer les filtres</Button>
      <Button handleClick={handleSeeResultsClick}>Voir le résultat(s)</Button>
      
    </div>
  );
};

export default Btn;




// const Button = ({ onClick, className, children }) => {
//     return (
//       <button
//         onClick={onClick}
//         className={`p-4 border border-solid border-noir-corbeau cursor-pointer ${className}`}
//       >
//         {children}
//       </button>
//     );
//   };
  
//   export default Button;