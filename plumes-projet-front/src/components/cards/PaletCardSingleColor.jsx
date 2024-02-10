import clsx from "clsx";

const PaletButton = ({ color, selectedColor, setSelectedColor }) => {
  const colorStyle = { backgroundColor: `var(--search-${color})` };

  const style = clsx({
    "w-10 h-10 flex-shrink-0 rounded-full mr-2 border-4 border-solid border-ui-vert-naturaliste": true,
    "border-8 border-solid border-ui-vert-naturaliste": selectedColor === color,
  });

  const handleItemClick = () => {
    setSelectedColor(color);
  };

  return <div style={colorStyle} className={style} onClick={handleItemClick} />;
};
const PaletCardSingleColor = ({ selectedColor, setSelectedColor }) => {
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

  return (
    <>
      <div className="flex flex-row mt-3 ml-3 mb-10">
        {colors.map((color, index) => {
          return (
            <PaletButton
              key={index}
              color={color}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          );
        })}
      </div>
    </>
  );
};

export default PaletCardSingleColor;
