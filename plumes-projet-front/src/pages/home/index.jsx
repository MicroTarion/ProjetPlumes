import LogoSvg from "../../../public/logo/Group 76.svg"; // Remplacez le chemin par le chemin réel de votre logo

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-vert-naturaliste">
      <img src={LogoSvg} alt="Logo" className="mb-4" style={{ width: '14rem' }} />

      <div className={`p-8 text-center`}>
        <h1 className="text-3xl font-bold" style={{
          color: 'var(--Blanc-plume, #F8F8F8)',
          textAlign: 'center',
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '22px',
          textDecoration: 'none', // Supprime le soulignement
        }}>
          Découvrez à quel oiseau appartient cette plume
        </h1>
      </div>
    </div>
  );
};

export default HomePage;