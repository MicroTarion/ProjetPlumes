import TitleBarre from "../../components/common/TitleBarre";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import OiseauEtPlumeCard from "../../components/cards/OiseauEtPlumeCard";


const ResultatPage = () => {

  const location = useLocation();

  console.log(location.state.oiseaux[0]);
  console.log(location);

  return (
    <>
      <div>
        <TitleBarre />
        <div className="flex bg-vert-naturaliste text-blanc-plume relative min-h-[900px]">
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