// import DatavizCards from "./DatavizCards";
// import TitleBarre from "../common/TitleBarre";
// import { ReactSVG } from "react-svg";
// import { Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const port = "http://localhost:5000/";

// const BirdResult = () => {

//   const imagePath = `/lieux/icon-ville.svg`;
//   const vectorPath = `/logo/vector.svg`;

//   const location = useLocation();

// const [backendData, setBackendData] = useState(null);

// useEffect(() => {
//   const getData = () => {
//     fetch(port + "search", {
//       method: "POST",
//       body: JSON.stringify({
//         motif: location.state.motifPlume,
//         lieu: location.state.selectedLocation,
//         couleur: location.state.selectedColor,
//         typePlume: location.state.selectedFeatherType,
//       })
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setBackendData(data);
//       });
//   };

//   getData();
// }, []);

//   return (
//     <div className="flex flex-col items-center text-ui-blanc-plume bg-vert-naturaliste">
//       <div className="flex flex-col items-center m-4">
//         <div className="relative">
//           <img
//             className="w-full h-64 object-cover border border-noir rounded-xl"
//             src="main-image-url.jpg"
//             alt="Main Bird Image"
//           />

//           <div className="absolute top-0 right-0 mt-2 mr-2 bg-bleu-ciel border border-noir rounded flex flex-col items-center p-4">
//             <ReactSVG src={imagePath} alt="milieu urbains"/>
//             <p className="text-poppins text-ui-noir-corbeau pt-1">Ville</p>
//           </div>
//         </div>
//         <div className="text-ui-vert-naturaliste bg-blanc-tourterelle p-4">
//           <h1 className="font-f37-attila text-xl">Geai des bois</h1>
//           <h4 className="font-poppins text-0.8125rem italic">nom scientifique</h4>
//           <p className="text-poppins text-0.8125rem">Famille :</p>
//           <p className="text-poppins text-0.8125rem">Ordre :</p>
//         </div>
//       </div>
//       <div className="flex flex-row items-center mb-4">
//         <DatavizCards />
//       </div>
//       <div className="flex flex-col items-center">
//         <h2 className="font-poppins text-1.1875rem font-semibold text-blanc-plume">Description : </h2>
//         <p className="text-poppins text-0.8125rem">Lorem ipsum dolor sit amet.</p>
//       </div>
//     </div>
//   );
// };

// export default BirdResult;
import DatavizCards from "./DatavizCards";
import TitleBarre from "../common/TitleBarre";
import { ReactSVG } from "react-svg";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


const port = "http://localhost:5000/";
const BirdResult = () => {

  const location = useLocation();
  console.log(location.state.Id_oiseaux);

  const [birdData, setBirdData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch(port + "result/" + location.state.Id_oiseaux)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setBirdData(data);
        })
      };
      fetchData();
  }, []);

  const imagePath = `/lieux/${birdData && birdData[0] ? birdData[0].imagepath : null}`;
  const showTitleBarre = currentPath !== "/detail";
  const currentPath = location.pathname;

 
  console.log(birdData);

  return (
    <>

      {/* Affiche seulement TitleBarre si showTitleBarre est vrai */}
      {showTitleBarre && <TitleBarre />}
      <div className="w-full h-0.5 bg-ui-blanc-tourterelle bottom-0 left-0"></div>
      <div className="flex flex-col xl:flex-row items-center text-ui-blanc-plume bg-vert-naturaliste w-full  rounded-bl-xl rounded-br-xl mb-8">
        <div className="flex flex-col items-center m-0">

          <div className="relative">
            <img
              className="w-[92vw] h-[35vh] lg:w-[60vw] lg:h-[50vh] xl:w-[50vw] xl:h-[50vh] object-cover border border-noir rounded-bl-xl rounded-br-xl"
              src="main-image-url.jpg"
              alt="Main Bird Image"
            />
            <div className="absolute top-0 right-0 mr-6 bg-bleu-ciel border border-ui-noir-corbeau rounded-bl-lg rounded-br-lg p-2 w-14 h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 flex flex-col items-center">
              <ReactSVG
                src={imagePath}
                alt="milieu urbain"
                className="w-2 lg:w-4 xl:w-6 flex justify-center items-center"
              />
              <p className="text-poppins text-ui-noir-corbeau text-xs lg:text-sm xl:text-base flex justify-center items-center">Ville</p>
            </div>
          </div>

          <div className="text-ui-vert-naturaliste bg-blanc-tourterelle p-4 mb-32 lg:p-6 w-[82vw] h-[18vh] lg:w-[42vw] lg:h-[19vh] xl:w-[40vw] xl:h-auto object-cover border border-noir rounded-bl-xl rounded-br-xl">
            <h1 className="font-sora text-xl">Geai des bois</h1>
            <h4 className="font-poppins text-0.8125rem italic">nom scientifique</h4>
            <p className="text-poppins text-0.8125rem">Famille :</p>
            <p className="text-poppins text-0.8125rem">Ordre :</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <DatavizCards />

          <div className="flex flex-col  items-center mb-4 w-2/3 lg:h-1/8">
            <h2 className="font-poppins text-1.1875rem font-semibold text-blanc-plume mb-2">Description : </h2>
            <p className="text-poppins text-0.8125rem  text-justify">
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </>

  );

};
export default BirdResult