import FindingLocationCards from "../../components/cards/FindingLocationCards";
import Typography from "../../components/common/Typography";
import ContainerButton from "./ContainerButton";
import FeatherTypeCards from "../../components/cards/FeatherTypeCards";
/////////////// A DECOMMENTER //////////////////
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import CursorSize from "../../components/cards/CursorSize";
import PaletCardSingleColor from "../../components/cards/PaletCardSingleColor";


const SearchFilter = ({

  // ********** à commenter jusqu'à ligne 24 *********
  // selectedLocation,
  // setSelectedLocation,
  // selectedFeatherType,
  // setSelectedFeatherType,
  // motifPlume,
  // setMotifPlume,
  // selectedColor,
  // setSelectedColor,
  postData,
  // ********** fin commentation *********


// ********** à décommenter jusqu'a la ligne 53 *********
backendData,
oiseaux,
motifPlume,
setMotifPlume,
selectedLocation,
setSelectedLocation,
selectedFeatherType,
setSelectedFeatherType,
selectedColor,
setSelectedColor,
//********** fin décommentation *********



//////////////////////////////////////////
//////** à commenter jusqu'au return **************
// }) => {
//   const locationData = [
//     { title: "Campagne", logoFileName: "icon-countryside.svg" },
//     { title: "Ville", logoFileName: "icon-ville.svg" },
//     { title: "Forêt", logoFileName: "icon-forest.svg" },
//     { title: "Eau", logoFileName: "icon-aquatic.svg" },
//     { title: "Montagne", logoFileName: "icon-moutain.svg" },
//   ];

//   const plumeData = [
//     {
//       Id_Plumes: 1,
//       illustration: "plumes-canard-colvert",
//       "types de plumes": "Grande CS",
//     },
//     {
//       Id_Plumes: 2,
//       illustration: "plumes-cygne-tubercule",
//       "types de plumes": "Rectrice C",
//     },
//     {
//       Id_Plumes: 3,
//       illustration: "plumes-poule-d_eau",
//       "types de plumes": "Rectrice E",
//     },
//     {
//       Id_Plumes: 4,
//       illustration: "plumes-oie-cendree",
//       "types de plumes": "Rémige primaire E",
//     },
//     {
//       Id_Plumes: 5,
//       illustration: "plumes-chouette-hulotte",
//       "types de plumes": "Rémige secondaire E"
//     },
//     {
//       Id_Plumes: 6,
//       illustration: "plumes-hibou-petit-duc",
//       "types de plumes": "Rémige secondaire I"
//     },
//     {
//       Id_Plumes: 7,
//       illustration: "plumes-tourterelle-des-bois",
//       "types de plumes": "Sous caudale"
//     },
//     {
//       Id_Plumes: 8,
//       illustration: "plumes-tourterelle-turque",
//       "types de plumes": "Sus caudale"
//     },
//     {
//       Id_Plumes: 9,
//       illustration: "plumes-buse-variable",
//       "types de plumes": "Grande CP"
//     },
//   ];

//   const motifData = [
//     { name: "bicolore" },
//     { name: "bordure-vexille" },
//     { name: "encoches" },
//     { name: "lisere-vexille-interne" },
//     { name: "rayee" },
//     { name: "uni" },
//   ];

//   const sizes = [];

  /////////////////////Fin Commentaire /////////////////////


  /////////// Puis commenter le return //////////////////
//   return (
//     <>
//       {/* Filtre pour choix du lieu */}
//       <div className="searchFilter p-4 ">
//         <Typography tag="h3"> Lieu de trouvaille </Typography>
//         <div className="overflow-x-auto">
//           <div className="flex flex-row items-center justify-center mt-4 ml-3 mb-10">
//             {locationData.map((location, index) => (
//               <FindingLocationCards
//                 key={index}
//                 title={location.title}
//                 logoFileName={location.logoFileName}
//                 handleClick={() => setSelectedLocation(location.title)}
//                 selected={selectedLocation === location.title}
//               />
//             ))}
//           </div>
//         </div>


//         {/* Filtre pour choix du type de plume */}
//         <Typography tag="h3" className="mt-10"> Type de plume </Typography>
//         <div className="overflow-x-auto">
//           <div className="flex flex-row items-center justify-center mt-4 ml-3 mb-10">
//             {plumeData.map((plume) => (
//               <FeatherTypeCards
//                 key={plume.Id_Plumes}
//                 type={plume["types de plumes"]}
//                 folder="typePlume"
//                 handleClick={() => setSelectedFeatherType(plume.Id_Plumes)}
//                 selected={selectedFeatherType === plume.Id_Plumes}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Filtre pour choix du motif de plume */}
//         <Typography tag="h3" className="mt-10"> Motif de Plume</Typography>
//         <div className="overflow-x-auto">
//           <div className="flex flex-row items-center justify-center mt-4 ml-3 mb-10">
//             {motifData.map((motif) => (
//               <FeatherTypeCards
//                 key={motif.name}
//                 type={motif.name}
//                 folder="motifPlume"
//                 handleClick={() => setMotifPlume(motif.name)}
//                 selected={motifPlume === motif.name}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Filtre pour choix de la couleur */}
//         <Typography tag="h3" className="mt-10"> Couleurs</Typography>
//         <div className="overflow-x-auto">
//           <PaletCardSingleColor
//             selectedColor={selectedColor}
//             setSelectedColor={setSelectedColor}
//           />
//         </div>

//         {/* Filtre pour choix de la taille */}
//         <Typography tag="h3"> Tailles</Typography>
//         <CursorSize />

//         {/* Buttons pour supprimer les filtres et voir les résultats*/}
//         <ContainerButton
//           onClickDelete={() => {
//             setSelectedFeatherType(null);
//             setSelectedLocation(null);
//             setMotifPlume(null);
//             setSelectedColor(null);
//           }}
//           onClickSeeResults={postData}
//         />

//       </div>

//     </>

//     // </div>
//   );
// };
// export default SearchFilter;

////////////////// return à décommenter pour dernière version backend //////////////////

return (
  <>
    {/* Filtre pour choix du lieu */}
    <div className="searchFilter p-4 ">
      <Typography tag="h3"> Lieu de trouvaille </Typography>
      <div className="overflow-x-auto">
        <div className="flex flex-row items-center justify-center mt-4 ml-3 mb-10">
        {backendData && backendData.lieu ? backendData.lieu.map((location) => (
            <FindingLocationCards
              key={location.nom}
              title={location.nom}
              logoFileName={location.logoFileName}
              handleClick={() => setSelectedLocation(location.nom)}
              selected={selectedLocation === location.nom}
            />
          )) : null}
        </div>
      </div>


      {/* Filtre pour choix du type de plume */}
      <Typography tag="h3" className="mt-10"> Type de plume </Typography>
      <div className="overflow-x-auto">
        <div className="flex flex-row items-center justify-center mt-4 ml-3 mb-10">
        {backendData && backendData ? backendData.type.map((plume) => (
            <FeatherTypeCards
              key={plume.types_de_plumes}
              type={plume.types_de_plumes}
              folder="typePlume"
              handleClick={() => setSelectedFeatherType(plume.types_de_plumes)}
              selected={selectedFeatherType === plume.types_de_plumes}
            />
          )) : null}
        </div>
      </div>

      {/* Filtre pour choix du motif de plume */}
      <Typography tag="h3" className="mt-10"> Motif de Plume</Typography>
      <div className="overflow-x-auto">
        <div className="flex flex-row items-center justify-center mt-4 ml-3 mb-10">
          {backendData && backendData.motif ? backendData.motif.map((motif) => (
            <FeatherTypeCards
              key={motif.nom}
              type={motif.nom === "barre terminale" || motif.nom === "liseré sur le vexille" ? motif.nom = "" : motif.nom}
              folder="motifPlume"
              handleClick={() => setMotifPlume(motif.nom)}
              selected={motifPlume === motif.nom}
            />
          )) : null}
        </div>
      </div>

      {/* Filtre pour choix de la couleur */}
      <Typography tag="h3" className="mt-10"> Couleurs</Typography>
      <div className="overflow-x-auto">
        <PaletCardSingleColor
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>

      {/* Filtre pour choix de la taille */}
      <Typography tag="h3"> Tailles</Typography>
      <CursorSize />

      {/* Buttons pour supprimer les filtres et voir les résultats*/}
      <ContainerButton
          onClickDelete={() => {
            console.log("detele")
            setSelectedFeatherType(null);
            setSelectedLocation(null);
            setMotifPlume(null);
            setSelectedColor(null);
          }}
          onClickSeeResults={() => {
            console.log(oiseaux);

            navigate('/resultat', { state: { selectedLocation: selectedLocation, selectedFeatherType: selectedFeatherType, motifPlume: motifPlume, selectedColor: selectedColor, oiseaux: oiseaux } })
          }}
        />

    </div>

  </>

  // </div>
);


};
export default SearchFilter;
