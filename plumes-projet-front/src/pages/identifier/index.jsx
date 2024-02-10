import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import TitleBarre from "../../components/common/TitleBarre";
import ResultatPage from "../resultat/index.jsx";
import OiseauEtPlumeCard from "../resultat/OiseauEtPlumeCard.jsx";

const port = "http://localhost:5000/";

const IdentifierPage = () => {
  const navigate = useNavigate();

  const [backendData, setBackendData] = useState(null);
  const [Id_Oiseaux, setId_Oiseaux] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedFeatherType, setSelectedFeatherType] = useState(null);
  const [motifPlume, setMotifPlume] = useState(null);

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

      });
  };

  return (
    <>
      <TitleBarre />
      <div className="flex flex-col lg:flex-row">
        {/* Composant SearchFilter - Aligné à gauche et occupe un tiers de l'écran sur desktop */}
        <div className="lg:w-1/3">
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
        </div>

        {/* Composant OiseauEtPlumeCard - S'affiche sur les deux tiers restants sur desktop */}
        <div className="lg:w-2/3  max-lg:hidden">
          <ResultatPage showTitleBarre={false} />
        </div>
      </div>
    </>
  );

};

export default IdentifierPage;
