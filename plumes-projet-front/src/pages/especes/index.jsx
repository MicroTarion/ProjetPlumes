import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const port = 'http://localhost:5000/';

const EspecesPage = () => {
  const [backendData, setBackendData] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getData = () => {
      fetch(port + 'list')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setBackendData(data);
        });
    };

    getData();
    console.log('test');
  }, []);

  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));

  const filterByLetter = (letter) => {
    setSelectedLetter(letter);
  };

  const isLetterDisplayed = backendData.some((oiseaux) => {
    oiseaux.NomOiseau.toUpperCase() === selectedLetter
  });
 

  const filteredData = backendData.filter(
    (oiseaux) => (selectedLetter ? oiseaux.NomOiseau.toUpperCase() === selectedLetter : true) && oiseaux.NomOiseau.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Texte au-dessus de la barre de recherche */}
      <div className="bg-blanc-plume text-noir-corbeau p-2 text-lg font-bold font-poppins">
        Toutes les espèces d'oiseaux:
      </div>

      {/* Moteur de recherche au-dessus de la lettre (fond blanc avec bordure verte) */}
      <div className="bg-blanc-plume border-b p-2 flex items-center" style={{ borderColor: '#008c8c' }}>
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => { setSelectedLetter(''); setSearchTerm(e.target.value) }}
          className="w-40 p-2 outline-none border-none bg-blanc-plume border-green-naturaliste"
        />
        <FontAwesomeIcon icon={faSearch} className="ml-2 text-green-naturaliste text-lg" />
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
                  ? 'bg-bleu-ciel text-noir-corbeau underline transform scale-110'
                  : 'bg-vert-naturaliste text-blanc-plume'
              } hover:bg-bleu-ciel transition-colors duration-300`}
              onClick={() => filterByLetter(letter)}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Affichage des oiseaux */}
        <div className="grid grid-cols-3 gap-8 mx-auto mt-8">
          {filteredData.map((oiseaux, index) => (
            <div key={oiseaux.Id_Oiseaux} className="mb-8">
              {index === 0 && isLetterDisplayed && (
                <div className="absolute left-0 top-8 ml-8 text-bleu-ciel font-bold text-lg">
                  <u>{selectedLetter}</u>
                </div>
              )}

              <h4 className="text-blanc-plume">{oiseaux.nom}</h4>
              <div className="flex space-x-4">
                <img className="w-[10rem] rounded shadow-lg" src={`public/illustrations/illustrations-oiseaux/${oiseaux.illustration}.jpeg`} alt="" />
                <img className="w-[10rem] rounded shadow-lg" src={`public/illustrations/plumes-oiseaux/${oiseaux.img_plumes}.jpg`} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EspecesPage;
