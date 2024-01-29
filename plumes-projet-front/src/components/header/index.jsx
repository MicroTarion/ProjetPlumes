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
    },
    {
      path: "/identifier",
      name: "Identifier",
    },
    {
      path: "/especes",
      name: "Especes",
    }
  ]
  return (
   <>
   <header className="flex justify-between">
    <ul className="flex gap-10">
      {paths.map((element) => {
        return (
          <Link to={element.path} key={element.name}><li>{element.name}</li></Link>
        )
      })}
    </ul>
   </header>
   </>
  )
}

export default Header;