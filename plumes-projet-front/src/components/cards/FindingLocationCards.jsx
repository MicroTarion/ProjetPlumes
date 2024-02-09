import clsx from "clsx";
import { ReactSVG } from "react-svg";

const FindingLocationCards = ({ title, logoFileName, handleClick, selected }) => {
  const imagePath = `/lieux/${logoFileName}`;

  const divStyle = clsx({
    "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-20 lg:h-20 xl:w-24 xl:h-24 m-1 p-3 border rounded-md flex flex-col items-center justify-center": true,
    "border-blanc-tourterelle text-vert-naturaliste bg-vert-naturaliste": selected,
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
