/* eslint-disable react/prop-types */
import clsx from "clsx";

const PaletCard = () => {
  const colors = [
    'search-blanc', 'search-gris', 'search-gris-bleute', 'search-bleu', 'search-vert',
    'search-jaune', 'search-orange', 'search-fauve', 'search-marron', 'search-noir'
  ];

  return (
    <div className="flex items-center space-x-2">
      {colors.map((colorClass, index) => (
        <div
          key={index}
          className={clsx("w-10 h-10 flex-shrink-0 rounded-full mr-2", colorClass)}
        />
      ))}
    </div>
  );
};

export default PaletCard;
