
import FindingLocationCards from "../../components/cards/FindingLocationCards";
import PaletCard from "../../components/cards/PaletCard"
import Typography from '../../components/common/Typography';
import ContainerButton from './ContainerButton';
import FeatherTypeCards from "../../components/cards/FeatherTypeCards";


const IdentifierPage = () => {
  const locationData = [
    { title: "Campagne", logoFileName: "icon-countryside.svg" },
    { title: "Ville", logoFileName: "icon-ville.svg" },
    { title: "Forêt", logoFileName: "icon-forest.svg" },
    { title: "Eau", logoFileName: "icon-aquatic.svg" },
    { title: "Montagne", logoFileName: "icon-moutain.svg" }
  ];



  const plumeData = [
    {
    "Id_Plumes": 1,
    "illustration": "plumes-canard-colvert",
    "types de plumes": "Grande CS"
    },
    {
    "Id_Plumes": 2,
    "illustration": "plumes-cygne-tubercule",
    "types de plumes": "Rectrice C"
    },
    {
    "Id_Plumes": 3,
    "illustration": "plumes-oie-cendree",
    "types de plumes": "Rémige primaire E"
    },
    {
    "Id_Plumes": 4,
    "illustration": "plumes-becasse-des-bois",
    "types de plumes": "Rémige primaire E"
    },
    {
    "Id_Plumes": 5,
    "illustration": "plumes-heron-cendre",
    "types de plumes": "Rémige primaire I"
    },
    {
    "Id_Plumes": 6,
    "illustration": "plumes-pigeon-colombin",
    "types de plumes": "Rémige secondaire E"
    },
    {
    "Id_Plumes": 7,
    "illustration": "plumes-pigeon-ramier",
    "types de plumes": "Rémige secondaire I"
    },
    {
    "Id_Plumes": 8,
    "illustration": "plumes-tourterelle-des-bois",
    "types de plumes": "Sous caudale"
    },
    {
    "Id_Plumes": 9,
    "illustration": "plumes-tourterelle-turque",
    "types de plumes": "Sus caudale"
    },
    {
    "Id_Plumes": 10,
    "illustration": "plumes-buse-variable",
    "types de plumes": "Grande CP"
    },
    {
    "Id_Plumes": 11,
    "illustration": "plumes-faisan-colchide",
    "types de plumes": "Grande CS"
    },
    {
    "Id_Plumes": 12,
    "illustration": "plumes-foulque-macroule",
    "types de plumes": "Rectrice C"
    },
    {
    "Id_Plumes": 13,
    "illustration": "plumes-poule-d_eau",
    "types de plumes": "Rectrice E"
    },
    {
    "Id_Plumes": 14,
    "illustration": "plumes-alouette-des-champs",
    "types de plumes": "Rémige primaire E"
    },
    {
    "Id_Plumes": 15,
    "illustration": "plumes-choucas-des-tours",
    "types de plumes": "Rémige primaire I"
    },
    {
    "Id_Plumes": 16,
    "illustration": "plumes-corneille-noire",
    "types de plumes": "Rémige secondaire E"
    },
    {
    "Id_Plumes": 17,
    "illustration": "plumes-geai-des-chenes",
    "types de plumes": "Rémige secondaire I"
    },
    {
    "Id_Plumes": 18,
    "illustration": "plumes-grand-corbeau",
    "types de plumes": "Sous caudale"
    },
    {
    "Id_Plumes": 19,
    "illustration": "plumes-pie-bavarde",
    "types de plumes": "Sus caudale"
    },
    {
    "Id_Plumes": 20,
    "illustration": "plumes-etourneau-sansonnet",
    "types de plumes": "Grande CP"
    },
    {
    "Id_Plumes": 21,
    "illustration": "plumes-chardonneret",
    "types de plumes": "Grande CP"
    },
    {
    "Id_Plumes": 22,
    "illustration": "plumes-pinson-des-arbres",
    "types de plumes": "Rémige primaire I"
    },
    {
    "Id_Plumes": 23,
    "illustration": "plumes-bergeronnette-grise",
    "types de plumes": "Rectrice E"
    },
    {
    "Id_Plumes": 24,
    "illustration": "plumes-mesange-bleue",
    "types de plumes": "Sous caudale"
    },
    {
    "Id_Plumes": 25,
    "illustration": "plumes-mesange-charbonniere",
    "types de plumes": "Rémige primaire E"
    },
    {
    "Id_Plumes": 26,
    "illustration": "plumes-mesange-noire",
    "types de plumes": "Rémige secondaire I"
    },
    {
    "Id_Plumes": 27,
    "illustration": "plumes-grive-draine",
    "types de plumes": "Rectrice C"
    },
    {
    "Id_Plumes": 28,
    "illustration": "plumes-grive-litorne",
    "types de plumes": "Rémige secondaire I"
    },
    {
    "Id_Plumes": 29,
    "illustration": "plumes-grive-mauvis",
    "types de plumes": "Rémige primaire I"
    },
    {
    "Id_Plumes": 30,
    "illustration": "plumes-grive-musicienne",
    "types de plumes": "Grande CP"
    },
    {
    "Id_Plumes": 31,
    "illustration": "plumes-merle-noir",
    "types de plumes": "Sous caudale"
    },
    {
    "Id_Plumes": 32,
    "illustration": "plumes-rougegorge",
    "types de plumes": "Sus caudale"
    },
    {
    "Id_Plumes": 33,
    "illustration": "plumes-pic-epeiche",
    "types de plumes": "Rectrice C"
    },
    {
    "Id_Plumes": 34,
    "illustration": "plumes-pic-vert",
    "types de plumes": "Grande CS"
    },
    {
    "Id_Plumes": 35,
    "illustration": "plumes-perruche-a-collier",
    "types de plumes": "Rémige secondaire E"
    },
    {
    "Id_Plumes": 36,
    "illustration": "plumes-chouette-effraie",
    "types de plumes": "Rectrice E"
    },
    {
    "Id_Plumes": 37,
    "illustration": "plumes-chouette-hulotte",
    "types de plumes": "Rémige secondaire E"
    },
    {
    "Id_Plumes": 38,
    "illustration": "plumes-hibou-grand-duc",
    "types de plumes": "Sous caudale"
    },
    {
    "Id_Plumes": 39,
    "illustration": "plumes-hibou-moyen-duc",
    "types de plumes": "Sus caudale"
    },
    {
    "Id_Plumes": 40,
    "illustration": "plumes-hibou-petit-duc",
    "types de plumes": "Rémige secondaire I"
    }
    ]

    const motifData = [
      {name:"bicolore"},
      {name:"bordure-vexille"},
      {name:"encoches"},
      {name:"lisere-vexille-interne"},
      {name:"rayee"},
      {name:"uni"},
    
    ]

    
  return (
    <>
    <div >
      <div className="bg-vert-naturaliste flex items-center justify-center vh-10 text-ui-blanc-plume ">
        <Typography tag="h2" variant="blanc-plume">
          Identifier ma plume
        </Typography>
      </div>
      <div className="flex flex-row items-center justify-center">
        {locationData.map((location, index) => (
          <FindingLocationCards  key={index} title={location.title} logoFileName={location.logoFileName} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-center">
        {motifData.map((motif) => (
          <FeatherTypeCards key={motif.name} type={motif.name} folder="motifPlume" />
        ))}
      </div>

      <div className="flex flex-row items-center justify-center">
        {plumeData.map((plume) => (
          <FeatherTypeCards key={plume.Id_Plumes} type={plume["types de plumes"]} folder="typePlume" />
        ))}
      </div>
      <PaletCard title="Autre Card" logoFileName="autre-icon.svg" />
   
         <ContainerButton onClickDelete={() => console.log("detele")} onClickSeeResults={() => console.log("see result")} />
    </div>

    </>
  );
}




export default IdentifierPage;

