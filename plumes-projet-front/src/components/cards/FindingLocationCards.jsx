import clsx from "clsx";
import { ReactSVG } from "react-svg";


const FindingLocationCards = ({ title, logoFileName, handleClick, selected }) => {

  const imagePath = `/lieux/${logoFileName}`;

  const divStyle = clsx({
    "w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] p-3 border rounded-md flex flex-col items-center justify-center": true,
    "border-blanc-tourterelle text-vert-naturaliste bg-vert-naturaliste":
      selected,
    "border-ui-vert-naturaliste text-blanc-plume bg-blanc-tourterelle": !selected,
  });

  const headerStyle = clsx({
    "font-poppins text-xs mt-1": true,
    "text-ui-blanc-plume": selected,
    "text-ui-vert-naturaliste": !selected,
  });


  return (

    <div onClick={handleClick} className={divStyle}>
      <ReactSVG src={imagePath} className={selected ? "selected" : null} />
      <h2 className={headerStyle}>{title}</h2>

    </div>
  );
};

export default FindingLocationCards;
