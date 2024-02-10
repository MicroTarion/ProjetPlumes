const DatavizCards = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-2 m-4">
            <div className="flex flex-col items-center p-4 m-4">
                <img src="./logo/dataviz-oiseau.svg" alt="Logo d'un oiseau pour connaître sa taille" className="w-full md:w-2/3 lg:w-full" />
                <p className="text-sm">Données taille oiseau</p>
            </div>

            <div className="flex flex-col items-center p-4 m-4">
                <img src="./logo/dataviz-observation.svg" alt="Logo des données d'observations" className="w-full md:w-2/3 lg:w-full" />
                <h2 className="text-sm mt-4">OBSERVATION</h2>
                <h3>TOUTE L'ANNÉE</h3>
            </div>

            <div className="flex flex-col items-center p-4 m-4">
                <p className="text-sm">Données envergures</p>
                <img src="./logo/dataviz-aile.svg" alt="Logo d'uen aile pour connaître l'envergure d'un oiseau" className="w-full md:w-2/3 lg:w-full" />
            </div>
        </div>
    );
}

export default DatavizCards;

