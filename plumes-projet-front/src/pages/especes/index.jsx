import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Abecedaire from "../../components/common/Abecedaire";
import TitleBarre from "../../components/common/TitleBarre";
import OiseauEtPlumeCard from "../../components/cards/OiseauEtPlumeCard";

const port = "http://localhost:5000/";

const EspecesPage = () => {
  const [backendData, setBackendData] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = () => {
      fetch(port + "list")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setBackendData(data);
        });
    };

    getData();
  }, []);

  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );

  const filterByLetter = (letter) => {
    setSelectedLetter(letter);
    setSearchTerm("");
  };

  const isLetterDisplayed = backendData ? backendData.filter((oiseaux) => {
    return oiseaux.NomOiseau.includes(selectedLetter)
  }) : false;

  const getFilteredData = () => {

    if (!backendData) return [];

    if (selectedLetter) {
      return backendData.filter(
        (oiseaux) => (oiseaux.NomOiseau[0].toUpperCase() === selectedLetter))

    } else if (searchTerm) {
      return backendData.filter(
        (oiseaux) => oiseaux.NomOiseau.toLowerCase().includes(searchTerm.toLowerCase())
      )
    } else {
      return backendData
    }
  }

  const filteredData = getFilteredData();

  return (
    <div>
      {/* Texte au-dessus de la barre de recherche
      <div className="bg-blanc-plume text-noir-corbeau p-2 text-lg font-bold font-poppins">
        Toutes les espèces d&apos;oiseaux:
      </div> */}

      <TitleBarre />

      {/* Moteur de recherche au-dessus de la lettre (fond blanc avec bordure verte) */}
      <div
        className="bg-blanc-tourterelle border-b px-10 pb-4 flex items-center"
        style={{ borderColor: "#008c8c" }}
      >
        <input
          type="text"
          placeholder="  Rechercher..."
          value={searchTerm}
          onChange={(e) => {
            setSelectedLetter("");
            setSearchTerm(e.target.value);
          }}
          className="w-40 p-2 outline-none bg-blanc-plume border border-ui-vert-naturaliste rounded-full"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="ml-2 text-green-naturaliste text-lg"
        />
      </div>

      {/* Conteneur principal (flex avec background vert naturaliste) */}
      <div className="flex bg-vert-naturaliste text-blanc-plume relative">

        {/* Affichage de l'abécédaire à droite */}
        <Abecedaire
          alphabet={alphabet}
          filterByLetter={filterByLetter}
          selectedLetter={selectedLetter}
        />

        {/* Affichage des oiseaux */}
        <div className="grid grid-cols-3 gap-0 mx-auto mt-4">
          {filteredData
            ? filteredData.map((oiseau, index) => (
                <OiseauEtPlumeCard
                  key={index}
                  oiseau={oiseau}
                  selectedLetter={selectedLetter}
                  isFirst={index === 0}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default EspecesPage;
