/* eslint-disable react/prop-types */
// import clsx from "clsx";
// const ColorSwatch = ({ color }) => {
//     const classColor = `w-10 h-10 flex-shrink-0 rounded-full mr-2 bg-${color}`;
//     const classColor2 = clsx({
//         'w-10 h-10 flex-shrink-0 rounded-full mr-2': true,
//         [`bg-${color}`]: true
//       });
      
//   return (
//     <div className={classColor2} />
//   );
// };

// const PaletCard = () => {
//   const colors = [
//     'blanc', 'gris', 'gris-bleute', 'bleu', 'vert',
//     'jaune', 'orange', 'fauve', 'marron', 'noir'
//   ];

//   return (
//     <div className="flex items-center space-x-2">
//       {colors.map((color, index) => (
//         <ColorSwatch key={index} color={color} />
//       ))}
//       <ColorSwatch color="vert-naturaliste" />
//     </div>
//   );
// };

// export default PaletCard;

// /* eslint-disable react/prop-types */
// import clsx from "clsx";
// const ColorSwatch = ({ color }) => {
//     // const classColor = `w-10 h-10 flex-shrink-0 rounded-full mr-2 bg-${color}`;
//     const classColor2 = clsx({
//         'w-10 h-10 flex-shrink-0 rounded-full mr-2': true,
//         [`bg-${color}`]: true
//       });
      
//   return (
//     <div className={classColor2} />
//   );
// };

// const PaletCard = () => {
//   const colors = [
//     'blanc', 'gris', 'gris-bleute', 'bleu', 'vert',
//     'jaune', 'orange', 'fauve', 'marron', 'noir'
//   ];

//   return (
//     <>
//       <div className="flex items-center space-x-2">
//       {/* {colors.map((color, index) => (
//         <ColorSwatch key={index} color={color} />
//       ))} */}
//       {colors.map((color) => (
//         <div style={{ backgroundColor:color.bg}} className="Slide w-screen h-screen flex items-center">
        
//         </div>
//     ))}
//       <ColorSwatch color="vert-naturaliste" />
//     </div>
//     </>
    
    
//   );
// };

// export default PaletCard;

// PaletCard.jsx

import clsx from "clsx";


const PaletCard = ({ paletItems }) => {
  return (
    <div>
      {paletItems.map((item, index) => (
        <div
          key={index}
          className={clsx("Card", "w-full h-full flex items-center", {
            [`bg-search-${item.color}`]: true,
          })}
        >
          {/* Contenu de la carte */}
          <div className="flex items-center space-x-2">
            {item.rounds.map((round, roundIndex) => (
              <div
                key={roundIndex}
                className="w-10 h-10 flex-shrink-0 rounded-full mr-2"
                style={{ backgroundColor: round.bgColor }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaletCard;
