import { useLocation } from 'react-router-dom';
import Typography from "../common/Typography";

const TitleBarre = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  let variant = "noir-corbeau";
  let text = "Lexique de la plume";
  let reverse = false;
  let bgColorClass = "bg-blanc-tourterelle"

  // Condition pour déterminer la variante, le texte et la valeur de reverse en fonction du chemin actuel
  if (currentPath === "/lexique") {
    variant = "noir-corbeau";
    text = "Lexique de la plume";
  } else if (currentPath === "/identifier") {
    variant = "noir-corbeau";
    text = "Identifier ma plume";
    reverse = true;
    bgColorClass = reverse ? "bg-vert-naturaliste" : "bg-blanc-tourterelle"; // Changer la couleur de fond pour la page "Identifier"
  } else if (currentPath === "/especes") {
    variant = "noir-corbeau";
    text = "Toutes les espèces d'oiseaux";
  } else if (currentPath === "/resultat") {
    variant = "vert-naturaliste";
    text = (
      <div className="flex items-center">
        <img
          src="logo/vector.svg"
          alt="logo pour retour aux résultats"
          className="m-6 color-ui-vert-naturaliste"
        />
        <span>Retour à l'identification</span>
      </div>
    );
  }

  return (
    <div className={`w-full h-[10vh] flex flex-row items-center ${bgColorClass} w-screen p-10`}>
      <Typography Tag="h3" variant={variant} reverse={reverse} customClasses="font-poppins text-lg">
        {text}
      </Typography>
    </div>
  );
}

export default TitleBarre;