const Button = ({ handleClick, children }) => {
    return (
      <button
        onClick={handleClick}


        className={`w-auto h-16 m-4 p-4 bg-blanc-plume text-vert-naturaliste border border-solid border-noir-corbeau rounded-xl cursor-pointer box-border-rounded

        hover:bg-800 hover:bg-blanc-tourterelle
        focus:bg-vert-naturaliste focus:text-ui-blanc-plume
        `}

      >
        {children}
      </button>
    );
  }
  
  export default Button;
  