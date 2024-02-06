import { useState } from 'react';

const CursorSize = ({ sizes }) => {
  const minValue = 0;
  const maxValue = sizes.length - 1;

  const [isDragging, setIsDragging] = useState(false);
  const [cursorPosition, setCursorPosition] = useState((minValue + maxValue) / 2);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const boundingRect = event.currentTarget.getBoundingClientRect();
      const newPosition = event.clientX - boundingRect.left;
      const percentage = Math.min((newPosition / boundingRect.width) * 100, 100);
      const newValue = Math.floor((percentage / 100) * (maxValue - minValue)) + minValue;

      setCursorPosition(newValue);
    }
  };

  return (
    <div className="relative mt-8">
      <div
        className="flex items-center"
        style={{
          width: '80%', 
          height: '8px', 
          backgroundColor: '#2D4941', 
          borderRadius: '4px',
          position: 'relative',
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#021120',
            position: 'absolute',
            left: `calc(${(cursorPosition / maxValue) * 100}% - 12px)`,
            top: '-10px',
            cursor: 'pointer',
          }}
        ></div>
      </div>

      <div className="ml-4">
        Taille sélectionnée: {sizes[cursorPosition]}
      </div>
    </div>
  );
};

export default CursorSize;
