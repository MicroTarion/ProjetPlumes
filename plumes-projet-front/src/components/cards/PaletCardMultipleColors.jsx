import { useState } from "react";
import clsx from "clsx";

const PaletButton = ({ color, selectedColors, setSelectedColors }) => {
  const colorStyle = { backgroundColor: `var(--search-${color})` };

  const style = clsx({
    "w-10 h-10 flex-shrink-0 rounded-full mr-2 border-4 border-solid border-ui-vert-naturaliste": true,
    "border-8 border-solid border-ui-vert-naturaliste":
      selectedColors.includes(color),
  });

  const handleItemClick = () => {
    setSelectedColors((prevSelectedColors) => {
      if (prevSelectedColors.includes(color)) {
        return prevSelectedColors.filter(
          (selectedColor) => selectedColor !== color
        );
      } else {
        return [...prevSelectedColors, color];
      }
    });
  };

  return <div style={colorStyle} className={style} onClick={handleItemClick} />;
};
const PaletCard = () => {
  const [selectedColors, setSelectedColors] = useState([]);

  const colors = [
    "blanc",
    "gris",
    "gris-bleute",
    "bleu",
    "vert",
    "jaune",
    "orange",
    "fauve",
    "marron",
    "noir",
  ];

  const defaultStyle =
    "w-10 h-10 flex-shrink-0 rounded-full mr-2 border-4 border-solid border-ui-vert-naturaliste";
  const selectedStyle = "border-8 border-solid border-ui-vert-naturaliste";

  return (
    <>
      <div className="flex flex-row">
        {colors.map((color, index) => {
          return (
            <PaletButton
              key={index}
              color={color}
              selectedColors={selectedColors}
              setSelectedColors={setSelectedColors}
            />
          );
        })}
      </div>
    </>
  );
};

export default PaletCard;
