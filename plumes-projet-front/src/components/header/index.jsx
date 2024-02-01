import { Link } from "react-router-dom";
import BookIcon from "../../../public/logo/iconLexique.svg";
import LeafIcon from "../../../public/logo/iconEspece.svg";
import IdentifierIcon from "../../../public/logo/iconIdentifier.svg";

const Header = () => {
  const paths = [
    {
      path: "/",
      name: "Accueil",
    },
    {
      path: "/lexique",
      name: "Lexique",
      icon: BookIcon,
    },
    {
      path: "/identifier",
      name: "Identifier",
      icon: IdentifierIcon,
    },
    {
      path: "/especes",
      name: "Especes",
      icon: LeafIcon,
    },
  ];

  return (
    <>
      <header className="flex justify-between items-center bg-gray-800 p-4">
        {/* Logo or site name can be added here */}
        <nav className="mx-auto">
          <ul className="flex gap-10">
            {paths.map((element) => (
              <li key={element.name} className="text-center">
                <Link to={element.path} className="text-white hover:text-gray-300">
                  <div>{element.name}</div>
                  {element.icon && <img src={element.icon} alt={element.name} className="icon mt-2 mx-auto" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
