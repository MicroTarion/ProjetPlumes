import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const port = "http://localhost:5000/";

const OiseauEtPlumeCard = ({ oiseau, selectedLetter }) => {
  return (
    <div className="mb-8">
      {selectedLetter !== "" ? (
        <div className="absolute left-0 top-8 ml-8 font-bold text-lg">
          <u className={`text-bleu-ciel font-bold text-lg`}>
            {selectedLetter}
          </u>
        </div>
      ) : null}

      <h4 className="text-blanc-plume font-poppins">{oiseau.nom}</h4>
      <div className="flex flex-col items-center space-y-2">
        <img
          className="w-[10rem] rounded shadow-lg"
          src={`public/illustrations/illustrations-oiseaux/${oiseau.illustration}.jpeg`}
          alt={oiseau.NomOiseau}
        />
        <p className="text-blanc-plume font-poppins">{`Illustration: ${oiseau.illustration}`}</p>
        <img
          className="w-[10rem] rounded shadow-lg"
          src={`public/illustrations/plumes-oiseaux/${oiseau.img_plumes}.jpg`}
          alt={`Plumes de ${oiseau.NomOiseau}`}
        />
        <p className="text-blanc-plume font-poppins">{`Plumes de ${oiseau.NomOiseau}`}</p>
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
    setSelectedLetter(letter);
  };

console.log(backendData);
  const isLetterDisplayed = backendData? backendData.some((oiseaux) => {
    console.log(oiseaux.NomOiseau)
    return oiseaux.NomOiseau.toUpperCase() === selectedLetter}): false;


  const filteredData =backendData? backendData.filter(
    (oiseaux) => (selectedLetter ? oiseaux.NomOiseau.toUpperCase() === selectedLetter : true) && oiseaux.NomOiseau.toLowerCase().includes(searchTerm.toLowerCase())
  ): false;
console.log(filteredData);


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
        {/* Abécédaire (position fixe sur la droite) */}
        <div className="fixed right-0 flex flex-col items-end p-4">
          {alphabet.map((letter, index) => (
          <button
          key={index}
          className={`m-1 ${
            selectedLetter === letter
              ? "bg-bleu-ciel text-noir-corbeau underline transform scale-110"
              : "bg-vert-naturaliste text-blanc-plume"
          } hover:bg-bleu-ciel transition-colors duration-300`}
          onClick={() => filterByLetter(letter)}
        >
          {letter}
        </button>
        
          ))}
        </div>

        {/* Affichage des oiseaux */}
        <div className="grid grid-cols-3 gap-8 mx-auto mt-8">
          {filteredData
            ? filteredData.map((oiseau) => (
                <OiseauEtPlumeCard
                  key={oiseau.NomOiseau}
                  oiseau={oiseau}
                  selectedLetter={selectedLetter}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default EspecesPage;
