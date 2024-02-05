import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const port = "http://localhost:5000/";

const OiseauEtPlumeCard = ({ oiseau, selectedLetter, isFirst }) => {
  return (
    <div className="mb-8">
      {selectedLetter !== "" && isFirst ? (
        <div className="absolute left-0 top-8 ml-8 font-bold text-lg">
          <u className={`text-ui-bleu-ciel font-bold text-lg`}>
            {selectedLetter}
          </u>
        </div>
      ) : null}

      <h4 className="text-blanc-plume font-poppins">{oiseau.nom}</h4>

      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="flex flex-col items-center space-y-2">
          <img
            className="w-[40rem] h-[10rem] rounded shadow-lg"
            src={`public/illustrations/illustrations-oiseaux/${oiseau.illustration}.jpeg`}
            alt={oiseau.NomOiseau}
          />
          <p className="text-ui-blanc-plume font-poppins">{` ${oiseau.NomOiseau}`}</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <img
            className="w-[10rem] h-[10rem] rounded shadow-lg"
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
<
