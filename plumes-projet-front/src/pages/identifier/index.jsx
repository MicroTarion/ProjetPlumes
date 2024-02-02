
import FindingLocationCards from "../../components/cards/FindingLocationCards";
import PaletCard from "../../components/cards/PaletCard"
import Typography from '../../components/common/Typography';
import ContainerButton from './ContainerButton';


const IdentifierPage = () => {
  const locationData = [
    { title: "Campagne", logoFileName: "icon-countryside.svg" },
    { title: "Ville", logoFileName: "icon-ville.svg" },
    { title: "Forêt", logoFileName: "icon-forest.svg" },
    { title: "Eau", logoFileName: "icon-aquatic.svg" },
    { title: "Montagne", logoFileName: "icon-moutain.svg" }
  ];

  return (
    <>
    <div >
      <div className="bg-vert-naturaliste flex items-center justify-center vh-10">
        <Typography tag="h2" variant="blanc-plume">
          Identifier ma plume
        </Typography>
      </div>
      <div className="flex flex-row items-center justify-center">
        {locationData.map((location, index) => (
          <FindingLocationCards  key={index} title={location.title} logoFileName={location.logoFileName} />
        ))}
      </div>
      <PaletCard title="Autre Card" logoFileName="autre-icon.svg" />
         <ContainerButton onClickDelete={() => console.log("detele")} onClickSeeResults={() => console.log("see result")} />
    </div>

    </>
  );
}




export default IdentifierPage;

