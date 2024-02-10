import { useNavigate } from "react-router-dom";
const OiseauEtPlumeCard = ({ oiseau, isFirst }) => {
  const navigate = useNavigate();

  // doonnées à suprimer si pas acccès bdd
  if (!oiseau) {
    oiseau = {
      Id_oiseaux: 1,
      nom: "Oiseau Exemple",
      illustration: "exemple_illustration",
      img_plumes: "exemple_img_plumes",
    };
  }

  return (
    <div className={`mb-${isFirst ? "12" : "8"} hover:scale-105 transition-transform duration-300`} onClick={() => navigate(`/detail`, { state: oiseau })}>
      <div className="flex space-x-0">

        {/* Image de gauche */}
        <div className="flex flex-col items-center space-y-4 ml-10 relative mt-4">
          <img
            className="w-auto max-h-[7rem] rounded-l-lg rounded-r-none shadow-lg z-10"
            src={`public/illustrations/illustrations-oiseaux/${oiseau.illustration}.jpeg`}
            alt={oiseau.nom}
          />
          <p className="text-xs text-ui-blanc-plume font-poppins">{` ${oiseau.nom}`}</p>
        </div>

        {/* Image de droite */}
        <div className="flex flex-col items-center space-y-4 mr-10 relative mt-4">
          <img
            className="w-auto max-h-[8rem] rounded-r-lg rounded-l-none shadow-lg z-10"
            src={`public/illustrations/plumes-oiseaux/${oiseau.img_plumes}.jpg`}
            alt={`Plumes de ${oiseau.nom}`}
          />
          <p className="text-xs text-ui-blanc-plume font-poppins">{`Plumes de ${oiseau.nom}`}</p>
        </div>
      </div>
    </div>
  );
}

export default OiseauEtPlumeCard;
