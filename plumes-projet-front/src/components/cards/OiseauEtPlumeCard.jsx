import { useNavigate } from "react-router-dom";

const OiseauEtPlumeCard = ({ oiseau, isFirst}) => {

    const navigate = useNavigate();
  
    return (
      <div className={`mb-${isFirst ? "12" : "8"} hover:scale-105 transition-transform duration-300`} onClick={() => navigate(`/detail`, { state: oiseau })}>
  
        <div className="flex">
          <div className="flex flex-col items-center space-y-4 mx-2 relative mt-4">
            <img
              className="w-auto max-h-[7rem] rounded shadow-lg z-10"
              src={`public/illustrations/illustrations-oiseaux/${oiseau.illustration}.jpeg`}
              alt={location.pathname === "/resultat" ? oiseau.nom : oiseau.NomOiseau}
            />
            <p className="text-xs text-ui-blanc-plume font-poppins">{` ${location.pathname === "/resultat" ? oiseau.nom : oiseau.NomOiseau}`}</p>
          </div>
  
          <div className="flex flex-col items-center space-y-4 mx-2 relative mt-4">
            <img
              className="w-auto max-h-[8rem] rounded shadow-lg z-10"
              src={`public/illustrations/plumes-oiseaux/${oiseau.img_plumes}.jpg`}
              alt={`Plumes de ${location.pathname === "/resultat" ? oiseau.nom : oiseau.NomOiseau}`}
            />
            <p className="text-xs text-ui-blanc-plume font-poppins">{`Plumes de ${location.pathname === "/resultat" ? oiseau.nom : oiseau.NomOiseau}`}</p>
          </div>
        </div>
      </div>
    );
  };

export default OiseauEtPlumeCard