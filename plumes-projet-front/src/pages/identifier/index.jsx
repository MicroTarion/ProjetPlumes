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
    <div className="bg-vert-nature p-8 text-center">
      <div className="bg-vert-nature p-4">
        <h3 style={{
          fontFamily: 'Poppins',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          color: 'var(--Blanc-plume, #F8F8F8)',
        }}>
          Identifier ma plume
        </h3>
      </div>
    </div>
  );
};

export { IdentifierPage, Header };
