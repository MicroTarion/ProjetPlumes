import TitleBarre from "../../components/common/TitleBarre";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";



const OiseauEtPlumeCard = ({ oiseau, isFirst }) => {

  const navigate = useNavigate();

  return (
    <div className={`mb-${isFirst ? "12" : "8"} hover:scale-105 transition-transform duration-300`} onClick={() => navigate(`/detail`, { state: oiseau })}>

      <div className="flex">
        <div className="flex flex-col items-center space-y-4 mx-2 relative mt-4">
          <img
            className="w-auto max-h-[7rem] rounded shadow-lg z-10"
            src={`public/illustrations/illustrations-oiseaux/${oiseau.illustration}.jpeg`}
            alt={oiseau.nom}
          />
          <p className="text-xs text-ui-blanc-plume font-poppins">{` ${oiseau.nom}`}</p>
        </div>

        <div className="flex flex-col items-center space-y-4 mx-2 relative mt-4">
          <img
            className="w-auto max-h-[8rem] rounded shadow-lg z-10"
            src={`public/illustrations/plumes-oiseaux/${oiseau.img_plumes}.jpg`}
            alt={`Plumes de ${oiseau.nom}`}
          />
          <p className="text-xs text-ui-blanc-plume font-poppins">{`Plumes de ${oiseau.nom}`}</p>
        </div>
      </div>
    </div>
  );
};
const ResultatPage = () => {

  const location = useLocation();

  console.log(location.state.oiseaux[0]);

  return (
    <>
      <div>
        <TitleBarre />
        <div className="flex bg-vert-naturaliste text-blanc-plume relative min-h-[1025px]">
          <div className="grid grid-cols-2 gap-0 mx-auto mt-4">
            {location && location.state.oiseaux
              ? location.state.oiseaux[0].map((oiseau, index) => (
                <OiseauEtPlumeCard
                  key={oiseau.Id_oiseaux}
                  oiseau={oiseau}
                  isFirst={index === 0}
                />
              ))
              : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default ResultatPage