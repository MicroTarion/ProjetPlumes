// import React from 'react';

// const DatavizCards = () => {
//     return (
//         <div className="flex flex-row justify-between items-center ">
            
//             <div className="flex flex-col items-center">
//                 <img src="./logo/dataviz-oiseau.svg" alt="Logo d'un oiseau" className="w-16 h-16 mb-2" />
//                 <p className="text-sm">Données taille oiseau</p>
//             </div>

//             <div className="flex flex-col items-center">
//                 <img src="./logo/dataviz-observation.svg" alt="Logo 2" className="w-16 h-16 mb-2" />
//                 <h2 className="text-sm">OBSERVATION</h2>
//                 <h3>TOUTE L'ANNÉE</h3>
//             </div>

//             <div className="flex flex-col items-center">
//                 <p className="text-sm">Données envergures</p>
//                 <img src="./logo/dataviz-aile.svg" alt="Logo 3" className="w-16 h-16 mb-2" />
//             </div>

//         </div>
//     );
// }

// export default DatavizCards;
import React from 'react';

const DatavizCards = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-2 m-4">
            <div className="flex flex-col items-center m-4">
                <img src="./logo/dataviz-oiseau.svg" alt="Logo d'un oiseau pour connaître sa taille" className="w-full md:w-1/3 lg:w-full"/>
                <p className="text-sm">Données taille oiseau</p>
            </div>

            <div className="flex flex-col items-center m-4">
                <img src="./logo/dataviz-observation.svg" alt="Logo des données d'observations" className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5"/>
                <h2 className="text-sm">OBSERVATION</h2>
                <h3>TOUTE L'ANNÉE</h3>
            </div>

            <div className="flex flex-col items-center m-4">
                <p className="text-sm">Données envergures</p>
                <img src="./logo/dataviz-aile.svg" alt="Logo d'uen aile pour connaître l'envergure d'un oiseau" className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5"/>
            </div>
        </div>
    );
}

export default DatavizCards;

