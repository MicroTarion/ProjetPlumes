// const PaletCard = () => {

// const defaultStyle = "w-10 h-10 flex-shrink-0 rounded-full mr-2 border-2 border-solid border-noir-corbeau";
//    return (
//      <>
//        <div className="flex flex-row">

//           <div className={defaultStyle + " bg-search-blanc"}/>
//           <div className={defaultStyle + " bg-search-gris"}/>
//           <div className={defaultStyle + " bg-search-gris-bleute"}/>
//           <div className={defaultStyle + " bg-search-bleu"}/>
//           <div className={defaultStyle + " bg-search-vert"}/>
//           <div className={defaultStyle + " bg-search-jaune"}/>
//           <div className={defaultStyle + " bg-search-orange"}/>
//           <div className={defaultStyle + " bg-search-fauve"}/>
//           <div className={defaultStyle + " bg-search-marron"}/>
//           <div className={defaultStyle + " bg-search-noir"}/>

//      </div>
//      </>
    
    
//    );
//  };


// export default PaletCard;
// import { useState } from "react";
// const PaletCard = () => {
//   const [selected, setSelected] = useState(Array(10).fill(false));

//   const colors = ["blanc", "gris", "gris-bleute", "bleu", "vert", "jaune", "orange", "fauve", "marron", "noir"];

//   const defaultStyle = "w-10 h-10 flex-shrink-0 rounded-full mr-2 border-2 border-solid border-ui-noir-corbeau";
//   const selectedStyle = "border-4 border-solid border-grey-500";

//   const handleItemClick = (index) => {
//     const updatedSelected = [...selected];
//     updatedSelected[index] = !updatedSelected[index];
//     setSelected(updatedSelected);
//   };

//   return (
//     <>
//       <div className="flex flex-row">
//         {colors.map((color, index) => (
//           <div
//             key={index}
//             className={selected[index] ? defaultStyle + ` bg-search-${color} ${selectedStyle}` : defaultStyle + ` bg-search-${color}`}
//             onClick={() => handleItemClick(index)}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default PaletCard;

// import { useState } from 'react';

// const PaletCard = () => {
//   const [selected, setSelected] = useState(null);

//   const defaultStyle = "w-10 h-10 flex-shrink-0 rounded-full mr-2 border-2 border-solid border-ui-noir-corbeau";
//   const selectedStyle = "border-4 border-solid border-red-500";

//   return (
//     <>
//       <div className="flex flex-row">
//         <div className={selected === "blanc" ? defaultStyle + " bg-search-blanc " + selectedStyle : defaultStyle + " bg-search-blanc"} onClick={() => setSelected("blanc")} />
//         <div className={selected === "gris" ? defaultStyle + " bg-search-gris " + selectedStyle : defaultStyle + " bg-search-gris"} onClick={() => setSelected("gris")} />
//         <div className={selected === "gris-bleute" ? defaultStyle + " bg-search-gris-bleute " + selectedStyle : defaultStyle + " bg-search-gris-bleute"} onClick={() => setSelected(  "gris-bleute")} />
//         <div className={selected === "bleu" ? defaultStyle + " bg-search-bleu " + selectedStyle : defaultStyle + " bg-search-bleu"} onClick={() => setSelected("bleu")} />
//         <div className={selected === "vert" ? defaultStyle + " bg-search-vert " + selectedStyle : defaultStyle + " bg-search-vert"} onClick={() => setSelected(  "vert")} />
//         <div className={selected  === "jaune" ? defaultStyle + " bg-search-jaune " + selectedStyle : defaultStyle + " bg-search-jaune"} onClick={() => setSelected(  "jaune")} />
//         <div className={selected  === "orange" ? defaultStyle + " bg-search-orange " + selectedStyle : defaultStyle + " bg-search-orange"} onClick={() => setSelected(  "orange" )} />
//         <div className={selected  === "fauve" ? defaultStyle + " bg-search-fauve " + selectedStyle : defaultStyle + " bg-search-fauve"} onClick={() => setSelected(    "fauve")} />
//         <div className={selected  === "marron" ? defaultStyle + " bg-search-marron " + selectedStyle : defaultStyle + " bg-search-marron"} onClick={() => setSelected(  "marron")} />
//         <div className={selected === "noir" ? defaultStyle + " bg-search-noir " + selectedStyle : defaultStyle + " bg-search-noir"} onClick={() => setSelected(    "noir")} />
//       </div>
//     </>
//   );
// };

// export default PaletCard;

// import { useState } from 'react';

// const PaletCard = () => {
//   const [selected, setSelected] = useState(null);

//   const colors = ["blanc", "gris", "gris-bleute", "bleu", "vert", "jaune", "orange", "fauve", "marron", "noir"];

//   const defaultStyle = "w-10 h-10 flex-shrink-0 rounded-full mr-2 border-2 border-solid border-ui-noir-corbeau";
//   const selectedStyle = "border-4 border-solid border-red-500";

//   const handleItemClick = (color) => {
//     setSelected(selected === color ? null : color);
//   };

//   return (
//     <>
//       <div className="flex flex-row">
//         {colors.map((color, index) => (
//           <div
//             key={index}
//             className={selected === color ? defaultStyle + ` bg-search-${color} ${selectedStyle}` : defaultStyle + ` bg-search-${color}`}
//             onClick={() => handleItemClick(color)}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default PaletCard;

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




