const FindingLocationCards = ({ title, logoFileName, handleClick, selected }) => {
  
  const imagePath = `/lieux/${logoFileName}`;
  const finalPath = imagePath;

  // const style = {
  //    backgroundColor: selected ? 'vert-naturaliste' : 'blanc-tourterelle', 
  //    // backgroundColor: selected ? 'ui-blanc-tourterelle' : 'ui-vert-naturaliste',
  //     borderColor: selected ? 'vert-naturaliste' : 'blanc-tourterelle', 
  //     color: selected ? 'vert-naturaliste' : 'blanc-plume',
  // };

  const style = {
    backgroundColor: selected ? 'vert-naturaliste' : 'blanc-tourterelle',
    borderColor: selected ? 'ui-blanc-plume' : 'ui-vert-naturaliste',
    color: selected ? 'ui-blanc-plume' : 'ui-vert-naturaliste',
  };

  return (
      // <div onClick={handleClick} className={`w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] p-3 border border-${style.borderColor} rounded-md text-${style.color} bg-${style.backgroundColor} flex flex-col items-center justify-center`}>
      //     <img src={finalPath} alt={title} className={`w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] color-${style.color}`} />
      //     <h2 className={`font-poppins text-xs mt-1 text-${style.color}`}>{title}</h2>
      // </div>
      <div onClick={handleClick} className={`w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] p-3 border rounded-md bg-${style.backgroundColor} border-${style.borderColor} flex flex-col items-center justify-center`}>
        <img src={finalPath} alt={title} className={`w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] text-${style.color}`} />
        <h2 className={`font-poppins text-xs mt-1 text-${style.color}`}>{title}</h2>
      </div>
  );
};

export default FindingLocationCards;

// import clsx from "clsx";
// import { ReactSVG } from "react-svg";

// import "./style.css";

// const FindingLocationCards = ({
//   title,
//   logoFileName,
//   handleClick,
//   selected,
// }) => {
//   const imagePath = `/lieux/${logoFileName}`;

//   const divStyle = clsx({
//     "w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] p-3 border rounded-md flex flex-col items-center justify-center": true,
//     "border-vert-naturaliste text-vert-naturaliste bg-vert-naturaliste":
//       selected,
//     "border-blanc-tourterelle text-blanc-plume bg-blanc-tourterelle": !selected,
//   });

//   const headerStyle = clsx({
//     "font-poppins text-xs mt-1": true,
//     "text-vert-naturaliste": selected,
//     "text-blanc-plume": !selected,
//   });

//   return (
//     <div onClick={handleClick} className={divStyle}>
//       <ReactSVG src={imagePath} className={selected ? "selected" : null} />
//       <h2 className={headerStyle}>{title}</h2>
//     </div>
//   );
// };

// export default FindingLocationCards;