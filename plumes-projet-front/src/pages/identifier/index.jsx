import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import TitleBarre from "../../components/common/TitleBarre";
import ResultatPage from "../resultat/index.jsx";

const port = "http://localhost:5000/";

const IdentifierPage = () => {
  const navigate = useNavigate();


  //>>>>>>>>>> à commenter jusqu'à ligne 51
  // const [backendData, setBackendData] = useState(null);
  // const [Id_Oiseaux, setId_Oiseaux] = useState([]);
  // const [selectedLocation, setSelectedLocation] = useState(null);
  // const [selectedColor, setSelectedColor] = useState(null);
  // const [selectedFeatherType, setSelectedFeatherType] = useState(null);
  // const [motifPlume, setMotifPlume] = useState(null);

  // useEffect(() => {
  //   const getData = () => {
  //     fetch(port + "list")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setBackendData(data);
  //       });
  //   };

  //   getData();
  // }, []);

  // const postData = () => {
  //   fetch(port + "search", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       motif: motifPlume,
  //       lieu: selectedLocation,
  //       couleur: selectedColor,
  //       typePlume: selectedFeatherType,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setId_Oiseaux(data);

  //     });
  // };
  // >>>>>>>>>>>>> Fin de la ligne 51 à commenter




  ////////////////////// à décommenter
  const [backendData, setBackendData] = useState(null);
  const [oiseaux, setOiseaux] = useState([]);
  const [motifPlume, setMotifPlume] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedFeatherType, setSelectedFeatherType] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await fetch(port + "motifs")
        .then((response) => response.json())
        .then(async (motif) => {
          await fetch(port + "couleurs")
            .then((response) => response.json())
            .then(async (couleur) => {
              await fetch(port + "types")
                .then((response) => response.json())
                .then(async (type) => {
                  await fetch(port + "lieux")
                    .then((response) => response.json())
                    .then(async (lieu) => {
                      setBackendData({ motif, couleur, type, lieu });
                    })
                })
            })
        });
    };

    getData();
  }, []);

  const sizes = [];
  useEffect(() => {
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
          console.log(data);
          setOiseaux(data);

        })
    }
    postData();
  }, [motifPlume, selectedLocation, selectedColor, selectedFeatherType]);



  return (
    <>
      <TitleBarre />
      <div className="flex flex-col lg:flex-row">
        {/* Composant SearchFilter - Aligné à gauche et occupe un tiers de l'écran sur desktop */}
       
       {/* ///////////////////à commenter jusqu'à la ligne 136*/}
       
        {/* <div className="lg:w-1/3">
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
        </div> */}

{/* ////////////////// à décommenter jusqu'à la ligne 153 */}

        <div className="lg:w-1/3">
          <SearchFilter
            backendData={backendData}
            oiseaux={oiseaux}
            motifPlume={motifPlume}
            setMotifPlume={setMotifPlume}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedFeatherType={selectedFeatherType}
            setSelectedFeatherType={setSelectedFeatherType}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>
  {/* ///////////////// fin décommentation */}

        {/* Composant OiseauEtPlumeCard - S'affiche sur les deux tiers restants sur desktop */}
        <div className="lg:w-2/3  max-lg:hidden">
          <ResultatPage showTitleBarre={false} />
        </div>
      </div>
    </>
  );

};

export default IdentifierPage;
