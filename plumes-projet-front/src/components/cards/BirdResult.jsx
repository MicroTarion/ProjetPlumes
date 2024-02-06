import DatavizCards from "./DatavizCards";
import { ReactSVG } from "react-svg";

const BirdResult = () => {

  const imagePath = `/lieux/icon-ville.svg`;

  return (
    <div className="flex flex-col items-center text-ui-blanc-plume bg-vert-naturaliste">
      <div className="flex flex-col items-center m-4">
        <div className="relative">
          <img
            className="w-full h-64 object-cover border border-noir rounded-xl"
            src="main-image-url.jpg"
            alt="Main Bird Image"
          />

          <div className="absolute top-0 right-0 mt-2 mr-2 bg-bleu-ciel border border-noir rounded flex flex-col items-center p-4">
            <ReactSVG src={imagePath} alt="milieu urbains"/>
            <p className="text-poppins text-ui-noir-corbeau pt-1">Ville</p>
          </div>
        </div>
        <div className="text-ui-vert-naturaliste bg-blanc-tourterelle p-4">
          <h1 className="font-f37-attila text-xl">Geai des bois</h1>
          <h4 className="font-poppins text-0.8125rem italic">nom scientifique</h4>
          <p className="text-poppins text-0.8125rem">Famille :</p>
          <p className="text-poppins text-0.8125rem">Ordre :</p>
        </div>
      </div>
      <div className="flex flex-row items-center mb-4">
        <DatavizCards />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-poppins text-1.1875rem font-semibold text-blanc-plume">Description : </h2>
        <p className="text-poppins text-0.8125rem">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default BirdResult;
