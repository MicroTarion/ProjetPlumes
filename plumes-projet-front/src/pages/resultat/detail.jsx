import BirdResult from "../../components/cards/BirdResult";
import { useState, useEffect } from "react";


const port = "http://localhost:5000/";

const DetailPage = () => {

 
    return (
        <div className="flex flex-col items-center justify-center bg-vert-naturaliste bg-opacity-50">
            <BirdResult />
        </div>
    );
};

export default DetailPage;