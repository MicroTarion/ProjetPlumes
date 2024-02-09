import clsx from "clsx"; // Import de la bibliothèque clsx pour gérer les classes conditionnelles
import { Link, useLocation } from "react-router-dom"; // Import de Link et useLocation pour la navigation dans React Router

const Header = () => {
  const location = useLocation(); // Utilisation de useLocation pour obtenir l'URL actuelle
  const paths = [ // Définition des chemins de navigation avec leurs noms et éventuellement leurs icônes
    {
      path: "/",
      name: "Accueil",
    },
    {
      path: "/lexique",
      name: "Lexique",
      icon: "/logo/iconLexique.svg",
    },
    {
      path: "/identifier",
      name: "Identifier",
      icon: "/logo/iconIdentifier.svg",
    },
    {
      path: "/especes",
      name: "Especes",
      icon: "/logo/iconEspeces.svg",
    },
  ];

  return (
    <>
      {/* Header visible sur les écrans de taille moyenne et supérieure */}
      <header className="hidden md:flex justify-between items-center bg-noir-corbeau p-4">
        <nav className="mx-auto">
          <ul className="flex gap-10">
            {/* Mapping des éléments de navigation */}
            {paths.map((element) => (
              <li key={element.name} className="text-center">
                <Link
                  to={element.path}
                  className="text-ui-blanc-plume hover:text-gray-300" // Texte blanc avec effet de survol gris
                >
                  {/* Affichage du nom de l'élément de navigation */}
                  <div>{element.name}</div>
                  {/* Affichage de l'icône de l'élément de navigation s'il est défini */}
                  {element.icon && (
                    <img
                      src={element.icon}
                      alt={element.name}
                      className="icon mt-2 mx-auto" // Marge en haut et centrage horizontal
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      
      {/* Header visible sur les écrans de petite taille */}
      <header className="fixed bottom-0 left-0 h-20 right-0 flex bg-noir-corbeau p-2 md:hidden">
        <nav className="w-full">
          <ul className="flex gap-10 justify-around w-full">
            {/* Mapping des éléments de navigation */}
            {paths.map((element) => {
              if (element.path === "/") { // Si le chemin est la racine, ne rien afficher
                return null;
              }

              // Vérifier si l'élément de navigation est actif en fonction de l'URL actuelle
              let isActive = location.pathname === element.path;

              // Création de classes conditionnelles pour gérer l'apparence de l'élément actif
              const classes = clsx({
                "transition-all z-10 absolute bg-white flex justify-center items-center h-12 w-16 top-0 border-4 border-ui-noir-corbeau": true, // Style de base de l'icône
                "-top-6 ": isActive, // Déplacer l'élément vers le haut s'il est actif
              });

              return (
                <li key={element.name} className="text-center relative">
                  <Link to={element.path} className="text-ui-blanc-plume">
                    {/* Affichage de l'icône de l'élément de navigation */}
                    {element.icon && (
                      <>
                        {/* Utilisation de classes conditionnelles pour gérer l'apparence de l'icône */}
                        <div
                          className={classes}
                          style={{ borderRadius: "40px" }} // Définition du rayon de bordure pour l'icône
                        >
                          <img
                            src={element.icon}
                            alt={element.name}
                            className="icon mx-auto" // Centrage horizontal
                            style={{ filter: "invert(1)" }} // Inversion des couleurs de l'icône
                          />
                        </div>
                        <div
                          className="transition-all relative flex justify-center items-center h-12 w-16 z-0"
                          style={{ borderRadius: "40px" }} // Définition du rayon de bordure pour l'icône
                        >
                          <img
                            src={element.icon}
                            alt={element.name}
                            className="icon mx-auto" // Centrage horizontal
                            style={{ filter: "invert(1)" }} // Inversion des couleurs de l'icône
                          />
                        </div>
                      </>
                    )}
                    {/* Affichage du nom de l'élément de navigation */}
                    <div className="text-xs">{element.name}</div> {/* Texte plus petit */}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
