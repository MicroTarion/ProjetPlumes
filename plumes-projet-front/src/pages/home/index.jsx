import LogoSvg from "../../../public/logo/Group 76.svg";
import VideoBackground from "../../../public/videos/bgPlumes.mp4";

const HomePage = () => {
  return (
    <div className="relative h-screen">
      {/* Vidéo en arrière-plan */}
      <video
        className="absolute top-0 left-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
        style={{ zIndex: -1 }} // Mettre le z-index à une valeur négative pour l'envoyer en arrière-plan
      >
        <source src={VideoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Contenu au premier plan */}
      <div
        className="flex flex-col items-center justify-center h-full bg-vert-naturaliste bg-opacity-50 relative"
        style={{ zIndex: 1 }}
      >
        <img
          src={LogoSvg}
          alt="Logo"
          className="mb-4"
          style={{ width: "14rem" }}
        />
        <div className={`p-8 text-center`}>
          <h1
            className="text-3xl font-bold"
            style={{
              color: "var(--Blanc-plume, #F8F8F8)",
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "22px",
              textDecoration: "none", // Supprime le soulignement
            }}
          >
            Découvrez à quel oiseau appartient cette plume
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;