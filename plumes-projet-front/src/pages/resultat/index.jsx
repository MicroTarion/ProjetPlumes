import TitleBarre from "../../components/common/TitleBarre";
import OiseauEtPlumeCard from "./OiseauEtPlumeCard";
import { useLocation } from "react-router-dom";

const ResultatPage = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Définir des données statiques si location.state n'est pas disponible
  const oiseauxData = location.state ? location.state.oiseaux[0] : [];
  // Déterminer si showTitleBarre doit être vrai en fonction du chemin actuel
  const showTitleBarre = currentPath !== "/identifier" && currentPath !== "/detail";

  return (
    <>
      {/* Affiche seulement TitleBarre si showTitleBarre est vrai */}
      {showTitleBarre && <TitleBarre />}
      <div className="w-full h-0.5 bg-ui-blanc-tourterelle bottom-0 left-0"></div>

      <div className="bg-vert-naturaliste p-4">
        <h1 className={`text-ui-bleu-ciel font-bold font-sora text-lg mb-4`}>Vos Résultats :</h1>
        {/* <h2 className={`text-ui-bleu-ciel font-bold font-sora text-lg`}>{Nombres de resultas}</h2> */}
        <div className="w-2/3 md:w-1/2 lg:w-1/3 h-0.5 bg-ui-bleu-ciel bottom-0 left-0"></div>

        <div className="grid grid-cols-2 gap-0 mx-auto mt-4">
          {oiseauxData.map((oiseau, index) => (
            <OiseauEtPlumeCard
              key={oiseau.Id_oiseaux}
              oiseau={oiseau}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ResultatPage;

