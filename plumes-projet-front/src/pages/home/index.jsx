import LogoSvg from "../../../public/logo/Group 76.svg";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-900 via-green-900 to-green-800 animate-gradient">
      <img src={LogoSvg} alt="Logo" className="mb-4" style={{ width: '14rem' }} />

      <div className={`p-8 text-center`}>
        <h1 className="text-3xl font-bold text-white font-poppins">
          Découvrez à quel oiseau appartient cette plume
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
