import BirdResult from "../../components/cards/BirdResult";
import { useState, useEffect } from "react";


const port = "http://localhost:5000/";

const ResultatPage = () => {

 
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-vert-naturaliste bg-opacity-50">
            <BirdResult />
        </div>
    );
};

export default ResultatPage;