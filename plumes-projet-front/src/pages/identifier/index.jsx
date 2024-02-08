import FindingLocationCards from "../../components/cards/FindingLocationCards";
import Typography from "../../components/common/Typography";
import ContainerButton from "./ContainerButton";
import FeatherTypeCards from "../../components/cards/FeatherTypeCards";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import CursorSize from "../../components/cards/CursorSize";
import PaletCardSingleColor from "../../components/cards/PaletCardSingleColor";

const port = "http://localhost:5000/";
const IdentifierPage = () => {

  const navigate = useNavigate();

  const [backendData, setBackendData] = useState(null);
  const [oiseaux, setOiseaux] = useState([]);
  const [motifPlume, setMotifPlume] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedFeatherType, setSelectedFeatherType] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await fetch(port + "motifs")
        .then((response) => response.json())
        .then(async (motif) => {
          await fetch(port + "couleurs")
            .then((response) => response.json())
            .then(async (couleur) => {
              await fetch(port + "types")
                .then((response) => response.json())
                .then(async (type) => {
                  await fetch(port + "lieux")
                    .then((response) => response.json())
                    .then(async (lieu) => {
                      setBackendData({ motif, couleur, type, lieu });
                    })
                })
            })
        });
    };

    getData();
  }, []);

  const sizes = [];
useEffect(() => {
  const postData = () => {
    fetch(port + "search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        motif: motifPlume,
        lieu: selectedLocation,
        couleur: selectedColor,
        typePlume: selectedFeatherType,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOiseaux(data);

      })
    }
    postData();
}, [motifPlume, selectedLocation, selectedColor, selectedFeatherType]);

  return (
    <>
      <div>
        <div className="bg-vert-naturaliste flex items-center justify-center vh-10 text-ui-blanc-plume">

          <Typography tag="h2" variant="blanc-plume">

            Identifier ma plume
          </Typography>
        </div>

        <Typography tag="h3"> Lieu de trouvaille </Typography>
        <div className="flex flex-row items-center justify-center">
          {backendData && backendData.lieu ? backendData.lieu.map((location) => (
            <FindingLocationCards
              key={location.nom}
              title={location.nom}
              logoFileName={location.logoFileName}
              handleClick={() => setSelectedLocation(location.nom)}
              selected={selectedLocation === location.nom}
            />
          )) : null}
        </div>

        <Typography tag="h3"> Type de plume </Typography>
        <div className="flex flex-row items-center justify-center">
          {backendData && backendData ? backendData.type.map((plume) => (
            <FeatherTypeCards
              key={plume.types_de_plumes}
              type={plume.types_de_plumes}
              folder="typePlume"
              handleClick={() => setSelectedFeatherType(plume.types_de_plumes)}
              selected={selectedFeatherType === plume.types_de_plumes}
            />
          )) : null}
        </div>

        <Typography tag="h3"> Motif de Plume</Typography>
        <div className="flex flex-row items-center justify-center">
          {backendData && backendData.motif ? backendData.motif.map((motif) => (
            <FeatherTypeCards
              key={motif.nom}
              type={motif.nom === "barre terminale" || motif.nom === "liseré sur le vexille" ? motif.nom = "" : motif.nom}
              folder="motifPlume"
              handleClick={() => setMotifPlume(motif.nom)}
              selected={motifPlume === motif.nom}
            />
          )) : null}
        </div>

        <Typography tag="h3"> Couleurs</Typography>

        <PaletCardSingleColor
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />

        <Typography tag="h3"> Tailles</Typography>
        <CursorSize />

        <ContainerButton
          onClickDelete={() => {
            console.log("detele")
            setSelectedFeatherType(null);
            setSelectedLocation(null);
            setMotifPlume(null);
            setSelectedColor(null);
          }}
          onClickSeeResults={() => {
            console.log(oiseaux);
          }}
        />
      </div>
    </>
  );
};

export default IdentifierPage;
