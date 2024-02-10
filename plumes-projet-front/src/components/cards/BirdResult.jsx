import DatavizCards from "./DatavizCards";
import TitleBarre from "../common/TitleBarre";
import { ReactSVG } from "react-svg";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const port = "http://localhost:5000/";
const BirdResult = () => {

  const location = useLocation();
  console.log(location.state.Id_oiseaux);

  const [birdData, setBirdData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch(port + "result/" + location.state.Id_oiseaux)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setBirdData(data);
        })
      };
      fetchData();
  }, []);

  const imagePath = `/lieux/${birdData && birdData[0] ? birdData[0].imagepath : null}`;
  const vectorPath = `/logo/vector.svg`;

 
  console.log(birdData);

  return (
    <>
    <TitleBarre />

    <div className="flex flex-col items-center text-ui-blanc-plume bg-vert-naturaliste w-full lg:w-[70vw] xl:w-4/5 rounded-bl-xl rounded-br-xl mb-8"> 
      <div className="flex flex-col items-center m-0">

        <div className="relative">
          <img
            className="w-[92vw] h-[35vh] lg:w-[60vw] lg:h-[50vh] xl:w-[50vw] xl:h-[60vh]  object-cover border border-noir rounded-bl-xl rounded-br-xl"
            src={`./illustrations/illustrations-oiseaux/${birdData && birdData[0] ? birdData[0].illustration : null}.jpeg`}
            alt="Main Bird Image"
          />
          <div className="absolute top-0 right-0 mr-6 bg-bleu-ciel border border-ui-noir-corbeau rounded-bl-lg rounded-br-lg p-2 w-14 h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 flex flex-col items-center">
            <ReactSVG
              src={imagePath}
              alt="milieu urbain"
              className="w-2 lg:w-4 xl:w-6 flex justify-center items-center"
            />
            <p className="text-poppins text-ui-noir-corbeau text-xs lg:text-sm xl:text-base flex justify-center items-center">{birdData && birdData[0] ? birdData[0].nomLocation : null}</p>
          </div>
        </div>

        <div className="text-ui-vert-naturaliste bg-blanc-tourterelle p-4 lg:p-6 w-[82vw] h-[18vh] lg:w-[45vw] lg:h-[19vh] xl:w-[40vw] xl:h-[20vh] object-cover border border-noir rounded-bl-xl rounded-br-xl">
          <h1 className="font-quantico text-xl">{birdData && birdData[0] ?birdData[0].nom : null}</h1>
          <h4 className="font-poppins text-0.8125rem italic">{`nom scientifique : ${birdData && birdData[0] ? birdData[0].nom_scientifique : null}`}</h4>
          <p className="text-poppins text-0.8125rem">{`Famille : ${birdData && birdData[0] ? birdData[0].NomFamille : null}`}</p>
          <p className="text-poppins text-0.8125rem">{`Ordre : ${birdData && birdData[0] ? birdData[0].NomOrdre : null}`}</p>
        </div>
      </div>

      <DatavizCards />

      <div className="flex flex-col items-center mb-4">
        <h2 className="font-poppins text-1.1875rem font-semibold text-blanc-plume mb-2">Description : </h2>
        <p className="text-poppins text-0.8125rem">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    </>
    
  );

};
export default BirdResult