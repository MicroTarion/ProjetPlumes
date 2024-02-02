import FindingLocationCards from "../../components/cards/FindingLocationCards";
import PaletCard from "../../components/cards/PaletCard"


const Identifier = () => {
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
      <h1>Page Identifier</h1>
      <div className="flex flex-row items-center justify-center">
        {locationData.map((location, index) => (
          <FindingLocationCards  key={index} title={location.title} logoFileName={location.logoFileName} />
        ))}
      </div>
      <PaletCard title="Autre Card" logoFileName="autre-icon.svg" />
    </div>
    </>
  );
}

export default Identifier;
