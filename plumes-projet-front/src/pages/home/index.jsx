import LogoSvg from "../../../public/logo/Group 76.svg"; // Remplacez le chemin par le chemin réel de votre logo
import Typography from "../../components/common/Typography";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-vert-naturaliste">
      <img src={LogoSvg} alt="Logo" className="mb-4" style={{ width: '14rem' }} />

      <div className={`p-8 text-center`}>


        <Typography
          tag="h1"
          variant="blanc-plume"
          customClasses="text-lg font-normal text-center font-Poppins"
          >
            Découvrez à quel oiseau appartient cette plume
        </Typography>

      </div>
    </div>
  );
};

export default HomePage;