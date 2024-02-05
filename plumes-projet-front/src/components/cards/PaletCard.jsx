import { useState } from 'react';

const PaletCard = () => {
  const [selectedColors, setSelectedColors] = useState([]);

  const colors = ["blanc", "gris", "gris-bleute", "bleu", "vert", "jaune", "orange", "fauve", "marron", "noir"];

  const defaultStyle = "w-10 h-10 flex-shrink-0 rounded-full mr-2 border-4 border-solid border-ui-vert-naturaliste";
  const selectedStyle = "border-8 border-solid border-ui-vert-naturaliste";

  const handleItemClick = (color) => {
    setSelectedColors((prevSelectedColors) => {
      if (prevSelectedColors.includes(color)) {
        return prevSelectedColors.filter((selectedColor) => selectedColor !== color);
      } else {
        return [...prevSelectedColors, color];
      }
    });
  };

  return (
    <>
      <div className="flex flex-row">
        {colors.map((color, index) => (
          <div
            key={index}
            className={selectedColors.includes(color) ? defaultStyle + ` bg-search-${color} ${selectedStyle}` : defaultStyle + ` bg-search-${color}`}
            onClick={() => handleItemClick(color)}
          />
        ))}
      </div>
    </>
  );
};

export default PaletCard;




