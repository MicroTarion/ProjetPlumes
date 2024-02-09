import { useState } from "react";
import clsx from "clsx";

const transformSlug = (type) => {
  return type.toLowerCase().replaceAll(" ", "-").replace("é", "e");
};

const FeatherTypeCards = ({ type, folder, handleClick, selected }) => {
  const [active, setActive] = useState(false);

  const slug = transformSlug(type);

  const handleActive = () => {
    setActive(true);
  };

  const handleBlur = () => {
    setActive(false);
  };

  const activeOrInactiveSlug = active ? `${slug}-actif` : slug;
  const finalSlug = selected ? `${slug}-actif` : activeOrInactiveSlug;

  const imageStyle = clsx("w-20 h-32 sm:w-24 sm:h-40 md:w-30 md:h-42 lg:w-20 lg:h-32 xl:w-24 xl:h-40 m-1 border border-ui-vert-naturaliste rounded-xl flex flex-col items-center justify-center mb-4");

  return (
    <div>
      <button onBlur={handleBlur} onFocus={handleActive} onClick={handleClick} className={imageStyle} >
        <img src={`/cards/${folder}/card-${finalSlug}.svg`} alt={type} style={{ objectFit: 'cover', width: '100%', height: '100%'}} />
      </button>
    </div>
  );
};

export default FeatherTypeCards;
