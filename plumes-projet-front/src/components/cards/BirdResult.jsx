import DatavizCards from "./DatavizCards";
import { useLocation } from "react-router-dom";  

const port = "http://localhost:5000/";

const BirdResult = () => {

  const location = useLocation();

  console.log(location.state.oiseaux[0]);
    return (
      <> { location && location.state ? location.state.oiseaux[0].map((oiseau) => (

      <div className="flex flex-col items-center" key={oiseau.Id_oiseaux}> 
        <div className="flex flex-row items-center mb-4">
          <img src={`/illustrations/illustrations-oiseaux/${oiseau.illustration}.jpeg`} alt="Bird Example" className="w-12 h-12 mr-4" />
          <div className="text-noir-corbeau">
            <h1 className="font-f37-attila text-1.875rem font-semibold">{oiseau.nom}</h1>
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
        
      )) : null
      }
      </>
    );
  };

  export default BirdResult