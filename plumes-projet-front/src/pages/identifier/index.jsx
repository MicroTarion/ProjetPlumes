// import FindingLocationCards from "../../components/cards/FindingLocationCards";
// import Typography from "../../components/common/Typography";
// import TitleBarre from "../../components/common/TitleBarre";
// import ContainerButton from "./ContainerButton";
// import FeatherTypeCards from "../../components/cards/FeatherTypeCards";
// import { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import CursorSize from "../../components/cards/CursorSize";
// import PaletCardSingleColor from "../../components/cards/PaletCardSingleColor";

// const port = "http://localhost:5000/";
// const IdentifierPage = () => {

//   const navigate = useNavigate();

//   const [backendData, setBackendData] = useState(null);
//   const [Id_Oiseaux, setId_Oiseaux] = useState([]);
//   const [motifPlume, setMotifPlume] = useState(null);
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [selectedFeatherType, setSelectedFeatherType] = useState(null);

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

//   useEffect(() => {
//     const getData = () => {
//       fetch(port + "list")
//         .then((response) => response.json())
//         .then((data) => {
//           setBackendData(data);
//         });
//     };

//     getData();
//   }, []);

//     const postData = () => {
//       console.log(JSON.stringify({
//         motif: motifPlume,
//         lieu: selectedLocation,
//         couleur: selectedColor,
//         typePlume: selectedFeatherType,
//       }));
//       fetch(port + "search", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           motif: motifPlume,
//           lieu: selectedLocation,
//           couleur: selectedColor,
//           typePlume: selectedFeatherType,
//         }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           setId_Oiseaux(data);
//         })
//     }


//   return (
//     <>
//       <div className="searchFilter">

//         <TitleBarre reverse={true} />

//         <Typography tag="h3"> Lieu de trouvaille </Typography>
//         <div className="flex flex-row items-center justify-center">
//           {locationData.map((location, index) => (
//             <FindingLocationCards
//               key={index}
//               title={location.title}
//               logoFileName={location.logoFileName}
//               handleClick={() => setSelectedLocation(location.title)}
//               selected={selectedLocation === location.title}
//             />
//           ))}
//         </div>

//         <Typography tag="h3"> Type de plume </Typography>
//         <div className="flex flex-row items-center justify-center">
//           {plumeData.map((plume) => (
//             <FeatherTypeCards
//               key={plume.Id_Plumes}
//               type={plume["types de plumes"]}
//               folder="typePlume"
//               handleClick={() => setSelectedFeatherType(plume.Id_Plumes)}
//               selected={selectedFeatherType === plume.Id_Plumes}
//             />
//           ))}
//         </div>

//         <Typography tag="h3"> Motif de Plume</Typography>
//         <div className="flex flex-row items-center justify-center">
//           {motifData.map((motif) => (
//             <FeatherTypeCards
//               key={motif.name}
//               type={motif.name}
//               folder="motifPlume"
//               handleClick={() => setMotifPlume(motif.name)}
//               selected={motifPlume === motif.name}
//             />
//           ))}
//         </div>

//         <Typography tag="h3"> Couleurs</Typography>

//         <PaletCardSingleColor
//           selectedColor={selectedColor}
//           setSelectedColor={setSelectedColor}
//         />

//         <Typography tag="h3"> Tailles</Typography>
//         <CursorSize/>

//         <ContainerButton
//           onClickDelete={() => {
//             console.log("detele")
//             setSelectedFeatherType(null);
//             setSelectedLocation(null);
//             setMotifPlume(null);
//             setSelectedColor(null);
//           }}
//           onClickSeeResults={() => {
//             postData();
//             navigate('/resultat', { state: { selectedLocation: selectedLocation, selectedFeatherType: selectedFeatherType, motifPlume: motifPlume, selectedColor: selectedColor } })
//             console.log(Id_Oiseaux);
//           }}
//         />
//       </div>
//     </>
//   );
// };

// export default IdentifierPage;
// IdentifierPage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import SearchResults from "./SearchResults";

const port = "http://localhost:5000/";

const IdentifierPage = () => {
  const navigate = useNavigate();

  const [backendData, setBackendData] = useState(null);
  const [Id_Oiseaux, setId_Oiseaux] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedFeatherType, setSelectedFeatherType] = useState(null);
  const [motifPlume, setMotifPlume] = useState(null);

  // Déclaration de l'état searchFiltersApplied
  const [searchFiltersApplied, setSearchFiltersApplied] = useState(false);

  useEffect(() => {
    const getData = () => {
      fetch(port + "list")
        .then((response) => response.json())
        .then((data) => {
          setBackendData(data);
        });
    };

    getData();
  }, []);

  const postData = () => {
    fetch(port + "search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        motif: motifPlume,
        lieu: selectedLocation,
        couleur: selectedColor,
        typePlume: selectedFeatherType,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setId_Oiseaux(data);

        // Mettez à jour l'état searchFiltersApplied après l'application des filtres
        setSearchFiltersApplied(true);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile View */}
      <div className="lg:hidden">
        {/* Conditionally render SearchResults or SearchFilter based on searchFiltersApplied state */}
        {searchFiltersApplied ? (
          <SearchResults data={Id_Oiseaux} />
        ) : (
          <SearchFilter
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedFeatherType={selectedFeatherType}
            setSelectedFeatherType={setSelectedFeatherType}
            motifPlume={motifPlume}
            setMotifPlume={setMotifPlume}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            postData={postData}
          />
        )}
      </div>

      {/* Tablet and Desktop Views */}
      <div className="hidden lg:flex lg:flex-col lg:w-1/3">
        {/* Render SearchFilter only if searchFiltersApplied is false */}
        {!searchFiltersApplied && (
          <SearchFilter
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedFeatherType={selectedFeatherType}
            setSelectedFeatherType={setSelectedFeatherType}
            motifPlume={motifPlume}
            setMotifPlume={setMotifPlume}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            postData={postData}
          />
        )}
      </div>
      <div className="lg:flex lg:w-2/3 lg:overflow-y-auto">
        <SearchResults data={Id_Oiseaux} />
      </div>
    </div>
  );
};

export default IdentifierPage;
