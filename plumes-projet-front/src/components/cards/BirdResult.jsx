import DatavizCards from "./DatavizCards";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";  

const port = "http://localhost:5000/";

const BirdResult = () => {

  const location = useLocation();

  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    const getData = () => {
      fetch(port + "search", {
        method: "POST",
        body: JSON.stringify({
          motif: location.state.motifPlume,
          lieu: location.state.selectedLocation,
          couleur: location.state.selectedColor,
          typePlume: location.state.selectedFeatherType,
        })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setBackendData(data);
        });
    };

    getData();
  }, []);

    return (
      <>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center mb-4">
          <img src="" alt="Bird Example" className="w-12 h-12 mr-4" />
          <div className="text-noir-corbeau">
            <h1 className="font-f37-attila text-1.875rem font-semibold">Un oiseau</h1>
            <h4 className="font-poppins text-0.8125rem italic">nom scientifique</h4>
            <p className="text-poppins text-0.8125rem">Famille</p>
            <p className="text-poppins text-0.8125rem">ordre</p>
          </div>
        </div>
        <div className="flex flex-row items-center mb-4">
          <DatavizCards/>
        </div>
        <div className="flex flex-row items-center">
          <h2 className="font-poppins text-1.1875rem font-semibold text-blanc-plume">Description</h2>
          <p className="text-poppins text-0.8125rem">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      </>
    );
  };

  export default BirdResult