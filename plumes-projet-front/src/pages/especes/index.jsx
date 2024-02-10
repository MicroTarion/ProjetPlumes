import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Abecedaire from "../../components/common/Abecedaire"; // Import du composant Abecedaire

const port = "http://localhost:5000/"; // Port pour l'API backend

// Composant pour afficher chaque carte d'oiseau et de plume
const OiseauEtPlumeCard = ({ oiseau, selectedLetter, isFirst }) => {
  return (
    <div className={`mb-${isFirst ? "12" : "8"} hover:scale-105 transition-transform duration-300`}>
      {/* Affichage de la lettre en bleu ciel si elle est sélectionnée et que c'est la première carte */}
      {selectedLetter !== "" && isFirst ? (
        <div className="absolute left-0 top-0 ml-8 font-bold text-lg" style={{ marginTop: '-6px' }}>
          <u className={`text-ui-bleu-ciel font-bold text-lg`}>
            {selectedLetter}
          </u>
        </div>
      ) : null}

      {/* Affichage du nom de l'oiseau */}
      <h4 className="text-blanc-plume font-poppins">{oiseau.nom}</h4>

      {/* Affichage des images et des noms des oiseaux et des plumes */}
      <div className="flex">
        {/* Image et nom de l'oiseau */}
        <div className="flex flex-col items-center space-y-4 mx-2 relative mt-4">
          <img
            className="w-auto max-h-[7rem] rounded shadow-lg z-10"
            src={`public/illustrations/illustrations-oiseaux/${oiseau.illustration}.jpeg`}
            alt={oiseau.NomOiseau}
          />
          <p className="text-xs text-ui-blanc-plume font-poppins">{` ${oiseau.NomOiseau}`}</p>
        </div>

        {/* Image et nom de la plume */}
        <div className="flex flex-col items-center space-y-4 mx-2 relative mt-4">
          <img
            className="w-auto max-h-[8rem] rounded shadow-lg z-10"
            src={`public/illustrations/plumes-oiseaux/${oiseau.img_plumes}.jpg`}
            alt={`Plumes de ${oiseau.NomOiseau}`}
          />
          <p className="text-xs text-ui-blanc-plume font-poppins">{`Plumes de ${oiseau.NomOiseau}`}</p>
        </div>
      </div>
    </div>
  );
};

// Page principale pour afficher les espèces d'oiseaux
const EspecesPage = () => {
  const [backendData, setBackendData] = useState(null); // Données récupérées depuis le backend
  const [selectedLetter, setSelectedLetter] = useState(""); // Lettre sélectionnée dans l'abécédaire
  const [searchTerm, setSearchTerm] = useState(""); // Terme de recherche dans la barre de recherche

  // Effet pour récupérer les données depuis le backend lors du chargement de la page
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

  // Générer l'alphabet
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );

  // Filtrer les données par lettre sélectionnée
  const filterByLetter = (letter) => {
    setSelectedLetter(letter);
    setSearchTerm("");
  };

  // Vérifier si une lettre est affichée dans la liste des espèces
  const isLetterDisplayed = backendData ? backendData.filter((oiseaux) => {
    return oiseaux.NomOiseau.includes(selectedLetter)
  }) : false;

  // Fonction pour obtenir les données filtrées en fonction de la lettre sélectionnée ou du terme de recherche
  const getFilteredData = () => {
    if (!backendData) return [];
    if (selectedLetter) {
      return backendData.filter((oiseaux) => oiseaux.NomOiseau[0].toUpperCase() === selectedLetter);
    } else if (searchTerm) {
      return backendData.filter((oiseaux) => oiseaux.NomOiseau.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      return backendData;
    }
  };

  // Données filtrées en fonction de la lettre sélectionnée ou du terme de recherche
  const filteredData = getFilteredData();

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
