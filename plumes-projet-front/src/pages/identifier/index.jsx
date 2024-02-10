import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import TitleBarre from "../../components/common/TitleBarre";
import ResultatPage from "../resultat/index.jsx";

const port = "http://localhost:5000/";

const IdentifierPage = () => {

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

console.log(backendData ? backendData.lieu: null);

  return (
    <>
      <TitleBarre />
      <div className="flex flex-col lg:flex-row">


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

        <div className="lg:w-2/3  max-lg:hidden">
          <ResultatPage showTitleBarre={false} />
        </div>
      </div>
    </>
  );

};

export default IdentifierPage;