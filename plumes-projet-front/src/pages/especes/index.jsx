import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Abecedaire from "../../components/common/Abecedaire";

const port = "http://localhost:5000/";

const OiseauEtPlumeCard = ({ oiseau, selectedLetter, isFirst }) => {
  return (
    <div className={`mb-${isFirst ? "12" : "8"} hover:scale-105 transition-transform duration-300`}>
      {selectedLetter !== "" && isFirst ? (
        <div className="absolute left-0 top-0 ml-8 font-bold text-lg" style={{ marginTop: '-6px' }}>
          <u className={`text-ui-bleu-ciel font-bold text-lg`}>
            {selectedLetter}
          </u>
        </div>
      ) : null}

      <h4 className="text-blanc-plume font-poppins">{oiseau.nom}</h4>

      <div className="flex">
        <div className="flex flex-col items-center space-y-2 mx-2 relative">
          <img
            className="w-auto max-h-[7rem] rounded shadow-lg z-10"
            src={`public/illustrations/illustrations-oiseaux/${oiseau.illustration}.jpeg`}
            alt={oiseau.NomOiseau}
          />
          <p className="text-ui-blanc-plume font-poppins">{` ${oiseau.NomOiseau}`}</p>
        </div>

        <div className="flex flex-col items-center space-y-2 mx-2 relative">
          <img
            className="w-auto max-h-[8rem] rounded shadow-lg z-10"
            src={`public/illustrations/plumes-oiseaux/${oiseau.img_plumes}.jpg`}
            alt={`Plumes de ${oiseau.NomOiseau}`}
          />
          <p className="text-ui-blanc-plume font-poppins">{`Plumes de ${oiseau.NomOiseau}`}</p>
        </div>
      </div>
    </div>
  );
};



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
    setSelectedLetter((prevLetter) =>
      prevLetter === letter ? "" : letter
    );
  };

  const isLetterDisplayed = backendData
    ? backendData.some((oiseaux) =>
        oiseaux.NomOiseau.toUpperCase().includes(selectedLetter)
      )
    : false;

  const filteredData = backendData
    ? backendData.filter(
        (oiseaux) =>
          (selectedLetter
            ? oiseaux.NomOiseau.toUpperCase().includes(selectedLetter)
            : true) &&
          oiseaux.NomOiseau.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : false;

  return (
    <div>
      {/* Texte au-dessus de la barre de recherche */}
      <div className="bg-blanc-plume text-noir-corbeau p-2 text-lg font-bold font-poppins">
        Toutes les espèces d&apos;oiseaux:
      </div>

      {/* Moteur de recherche au-dessus de la lettre (fond blanc avec bordure verte) */}
      <div
        className="bg-blanc-plume border-b p-2 flex items-center"
        style={{ borderColor: "#008c8c" }}
      >
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => {
            setSelectedLetter("");
            setSearchTerm(e.target.value);
          }}
          className="w-40 p-2 outline-none border-none bg-blanc-plume border-green-naturaliste"
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
                  key={oiseau.NomOiseau}
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
