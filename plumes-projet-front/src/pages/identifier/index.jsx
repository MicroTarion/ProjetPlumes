import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const paths = [
   
    {
      path: "/lexique",
      name: "Lexique",
    },
    {
      path: "/identifier",
      name: "Identifier",
    },
    {
      path: "/especes",
      name: "Especes",
    },
  ];

  return (
    <>
      <header className="flex justify-between items-center bg-gray-800 p-4">
        {/* Logo or site name can be added here */}
        <nav className="mx-auto">
          <ul className="flex gap-10">
            {paths.map((element) => (
              <li key={element.name}>
                <Link to={element.path} className="text-white hover:text-gray-300">
                  {element.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

const IdentifierPage = () => {
  return (
    <div>
      <h2>Page identifier</h2>
    </div>
  );
};

export { IdentifierPage, Header }; // Exportez les composants de cette manière
