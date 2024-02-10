import { useState } from 'react';
const CursorSize = () => {
  const minValue = 10;
  const maxValue = 170;

  const [cursorPosition, setCursorPosition] = useState((minValue + maxValue) / 2);

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setCursorPosition(newValue);
  };

  return (
    <div className="relative mt-8">
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={cursorPosition}
        onChange={handleInputChange}
        className="appearance-none w-80 h-2 rounded-md outline-none 
                   bg-vert-naturaliste cursor-pointer 
                   transition-all duration-300 hover:bg-vert-fonce 
                   focus:outline-none"
        style={{
          background: `linear-gradient(to right, #021120 0%, #021120 ${(cursorPosition - minValue) * 100 / (maxValue - minValue)}%, #2D4941 ${(cursorPosition - minValue) * 100 / (maxValue - minValue)}%, #2D4941 100%)`,
        }}
      />

      <div className="relative z-10 ml-4 text-ui-vert-naturaliste font-poppins text-xs">
        Taille sélectionnée : {cursorPosition} cm
      </div>
    </div>
  );
};

export default CursorSize;
