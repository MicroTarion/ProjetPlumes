import FindingLocationCards from "../../components/cards/FindingLocationCards";
import Typography from "../../components/common/Typography";
import ContainerButton from "./ContainerButton";
import FeatherTypeCards from "../../components/cards/FeatherTypeCards";
import CursorSize from "../../components/cards/CursorSize";
import { useState } from "react";
import PaletCardSingleColor from "../../components/cards/PaletCardSingleColor";


const IdentifierPage = () => {
  const locationData = [
    { title: "Campagne", logoFileName: "icon-countryside.svg" },
    { title: "Ville", logoFileName: "icon-ville.svg" },
    { title: "Forêt", logoFileName: "icon-forest.svg" },
    { title: "Eau", logoFileName: "icon-aquatic.svg" },
    { title: "Montagne", logoFileName: "icon-moutain.svg" },
  ];

  const [motifPlume, setMotifPlume] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  // const [selectedFeatherType, setSelectedFeatherType] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedFeatherType, setSelectedFeatherType] = useState(null);

  const plumeData = [
    {
      Id_Plumes: 1,
      illustration: "plumes-canard-colvert",
      "types de plumes": "Grande CS",
    },
    {
      Id_Plumes: 2,
      illustration: "plumes-cygne-tubercule",
      "types de plumes": "Rectrice C",
    },
    {
      Id_Plumes: 3,
      illustration: "plumes-poule-d_eau",
      "types de plumes": "Rectrice E",
    },
    {
      Id_Plumes: 4,
      illustration: "plumes-oie-cendree",
      "types de plumes": "Rémige primaire E",
    },
    {
      Id_Plumes: 5,
      illustration: "plumes-pigeon-ramier",
      "types de plumes": "Rémige secondaire I",
    },
    {
      Id_Plumes: 6,
      illustration: "plumes-chouette-hulotte",
      "types de plumes": "Rémige secondaire E",
    },
    {
      Id_Plumes: 7,
      illustration: "plumes-hibou-petit-duc",
      "types de plumes": "Rémige secondaire I",
    },
    {
      Id_Plumes: 8,
      illustration: "plumes-tourterelle-des-bois",
      "types de plumes": "Sous caudale",
    },
    {
      Id_Plumes: 9,
      illustration: "plumes-tourterelle-turque",
      "types de plumes": "Sus caudale",
    },
    {
      Id_Plumes: 10,
      illustration: "plumes-buse-variable",
      "types de plumes": "Grande CP",
    },
  ];

  const motifData = [
    { name: "bicolore" },
    { name: "bordure-vexille" },
    { name: "encoches" },
    { name: "lisere-vexille-interne" },
    { name: "rayee" },
    { name: "uni" },
  ];

  const sizes = [];

  return (
    <>
      <div>
        <div className="bg-vert-naturaliste flex items-center justify-center vh-10">
          <Typography tag="h2" variant="blanc-plume">
            Identifier ma plume
          </Typography>
        </div>

        <Typography tag="h3"> Lieu de trouvaille </Typography>
        <div className="flex flex-row items-center justify-center">
          {locationData.map((location, index) => (
            <FindingLocationCards
              key={index}
              title={location.title}
              logoFileName={location.logoFileName}
              handleClick={() => setSelectedLocation(location.title)}
              selected={selectedLocation === location.title}
            />
          ))}
        </div>

        <Typography tag="h3"> Type de plume </Typography>
        <div className="flex flex-row items-center justify-center">
          {plumeData.map((plume) => (
            <FeatherTypeCards
              key={plume.Id_Plumes}
              type={plume["types de plumes"]}
              folder="typePlume"
              handleClick={() => setSelectedFeatherType(plume.Id_Plumes)}
              selected={selectedFeatherType === plume.Id_Plumes}
            />
          ))}
        </div>

        <Typography tag="h3"> Motif de Plume</Typography>
        <div className="flex flex-row items-center justify-center">
          {motifData.map((motif) => (
            <FeatherTypeCards
              key={motif.name}
              type={motif.name}
              folder="motifPlume"
              handleClick={() => setMotifPlume(motif.name)}
              selected={motifPlume === motif.name}
            />
          ))}
        </div>

        <Typography tag="h3"> Couleurs</Typography>

        <PaletCardSingleColor
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />

        <Typography tag="h3"> Tailles</Typography>
        <CursorSize/>
        
        <ContainerButton
          onClickDelete={() => console.log("detele")}
          onClickSeeResults={() => console.log("see result")}
        />
      </div>
    </>
  );
};

export default IdentifierPage;
