// import Typography from "../common/Typography";
// import React, { useState } from 'react';

// const DeleteFiltersButton = ({ onClickDelete, onClickSeeResults }) => {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleDeleteClick = () => {
//     // Inverser l'état du clic
//     setIsClicked(!isClicked);

//     // Appeler la fonction fournie onClickDelete
//     onClickDelete();
//   };

//   return (
//     <div className="flex justify-center space-x-4">
//       <button
//         onClick={handleDeleteClick}
//         className={`p-4 ${isClicked ? 'bg-vert-naturaliste text-blanc-plume' : 'bg-blanc-plume text-vert-naturaliste'} border border-solid border-noir-corbeau cursor-pointer`}
//       >
//         Supprimer les filtres
//       </button>

//       <button
//         onClick={onClickSeeResults}
//         className={`p-4 ${isClicked ? 'bg-vert-naturaliste text-blanc-plume' : 'bg-blanc-plume text-vert-naturaliste'} border border-solid border-noir-corbeau cursor-pointer`}
//       >
//         Voir le résultat(s)
//       </button>
//     </div>
//   );
// };

// export default DeleteFiltersButton;


const Button = ({ onClick, className, children }) => {
    return (
      <button
        onClick={onClick}
        className={`p-4 border border-solid border-noir-corbeau cursor-pointer ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;