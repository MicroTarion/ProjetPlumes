import BirdResult from "../../components/cards/BirdResult";
import TitleBarre from "../../components/common/TitleBarre";
import ResultatPage from "../../pages/resultat";

const port = "http://localhost:5000/";

const DetailPage = () => {

    return (
        <>
            <TitleBarre />
            <div className="flex flex-col lg:flex-row">
                {/* Composant ResultatPage - Aligné à gauche et occupe un tiers de l'écran sur desktop */}
                <div className="lg:w-1/3">
                    <ResultatPage showTitleBarre={false} />
                </div>
                {/* Composant OiseauEtPlumeCard - S'affiche sur les deux tiers restants sur desktop */}
                <div className="lg:w-2/3 flex flex flex-col items-center justify-center bg-vert-naturaliste bg-opacity-50">
                    <BirdResult />
                </div>
            </div>
        </>
    );
};

export default DetailPage;