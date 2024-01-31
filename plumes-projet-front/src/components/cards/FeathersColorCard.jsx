/* eslint-disable react/prop-types */
import clsx from "clsx";
const ColorSwatch = ({ color }) => {
    const classColor = `w-10 h-10 flex-shrink-0 rounded-full mr-2 bg-${color}`;
    const classColor2 = clsx({
        'w-10 h-10 flex-shrink-0 rounded-full mr-2': true,
        [`bg-${color}`]: true
      });
      
  return (
    <div className={classColor2} />
  );
};

const FeathersColorCard = () => {
  const colors = [
    'blanc', 'gris', 'gris-bleute', 'bleu', 'vert',
    'jaune', 'orange', 'fauve', 'marron', 'noir'
  ];

  return (
    <div className="flex items-center space-x-2">
      {colors.map((color, index) => (
        <ColorSwatch key={index} color={color} />
      ))}
      <ColorSwatch color="vert-naturaliste" />
    </div>
  );
};

export default FeathersColorCard;
