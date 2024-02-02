import React, { useEffect, useState } from 'react';

const port = 'http://localhost:5000/';

const EspecesPage = () => {
  const [backendData, setBackendData] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('');

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

  return (
    <div className="flex bg-vert-naturaliste text-blanc-plume">
      {/* Affichage des oiseaux */}
      <div className="grid grid-cols-3 gap-8 mx-auto mt-8">
        {backendData
          .filter((oiseaux) => (selectedLetter ? oiseaux.nom[0].toUpperCase() === selectedLetter : true))
          .map((oiseaux) => (
            <div key={oiseaux.Id_Oiseaux} className="mb-8">
              <h4 className="text-blanc-plume">{oiseaux.nom}</h4>
              <div className="flex space-x-4">
                <img className="w-[10rem]" src={`public/illustrations/illustrations-oiseaux/${oiseaux.illustration}.jpeg`} alt="" />
                <img className="w-[10rem]" src={`public/illustrations/plumes-oiseaux/${oiseaux.img_plumes}.jpg`} alt="" />
              </div>
            </div>
          ))}
      </div>

      {/* Abécédaire (position fixe sur la droite) */}
      <div className="flex flex-col items-start p-4 ml-auto">
        {alphabet.map((letter, index) => (
          <button
            key={index}
            className={`m-1 ${
              selectedLetter === letter ? 'bg-bleu-ciel text-noir-corbeau' : 'bg-vert-naturaliste text-blanc-plume'
            } hover:bg-bleu-ciel transition-colors duration-300`}
            onClick={() => filterByLetter(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EspecesPage;
