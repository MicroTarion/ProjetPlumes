import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
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
      icon: "/logo/iconEspeces.svg",
    },
  ];

  return (
    <>
      <header className="hidden md:flex justify-between items-center bg-noir-corbeau p-4">
        <nav className="mx-auto">
          <ul className="flex gap-10">
            {paths.map((element) => (
              <li key={element.name} className="text-center">
                <Link
                  to={element.path}
                  className="text-ui-blanc-plume hover:text-gray-300"
                >
                  <div>{element.name}</div>
                  {element.icon && (
                    <img
                      src={element.icon}
                      alt={element.name}
                      className="icon mt-2 mx-auto"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <header className="fixed bottom-0 left-0 h-20 right-0 flex bg-noir-corbeau p-2 md:hidden">
        <nav className="w-full">
          <ul className="flex gap-10 justify-around w-full">
            {paths.map((element) => {
              if (element.path === "/") {
                return null;
              }

              let isActive = location.pathname === element.path;

              const classes = clsx({
                "transition-all z-10 absolute bg-white flex justify-center items-center h-12 w-16 top-0 border-4 border-ui-noir-corbeau overflow-hidden": true,
                "-top-8 ": isActive,
              });

              const textStyles = {
                transform: isActive ? "scale(1.05)" : "scale(1)",
                marginTop: isActive ? "-4px" : "0",
              };

              return (
                <li key={element.name} className="text-center relative">
                  <Link to={element.path} className="text-ui-blanc-plume">
                    {element.icon && (
                      <>
                        <div
                          className={classes}
                          style={{
                            borderRadius: "40px",
                            transform: isActive ? "scale(1.2)" : "scale(1)",
                            marginTop: isActive ? "-4px" : "0",
                          }}
                        >
                          <img
                            src={element.icon}
                            alt={element.name}
                            className="icon mx-auto"
                            style={{ filter: "invert(1)" }}
                          />
                        </div>
                        <div
                          className="transition-all relative flex justify-center items-center h-12 w-16 z-0 border-2 border-ui-noir-corbeau"
                          style={{
                            borderRadius: "40px",
                            marginTop: isActive ? "-4px" : "0",
                          }}
                        >
                          <img
                            src={element.icon}
                            alt={element.name}
                            className="icon mx-auto"
                            style={{ filter: "invert(1)" }}
                          />
                        </div>
                      </>
                    )}
                    <div className="text-xs" style={textStyles}>
                      {element.name}
                    </div>
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
