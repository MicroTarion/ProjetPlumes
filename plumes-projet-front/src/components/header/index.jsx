import { Link } from "react-router-dom";

const Header = () => {
  const paths = [
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
      icon: "/logo/iconEspece.svg",
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
                <Link to={element.path} className="text-ui-blanc-plume hover:text-gray-300">
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
