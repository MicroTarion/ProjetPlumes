import BirdResult from "../../components/cards/BirdResult";
import { useState, useEffect } from "react";


const port = "http://localhost:5000/";

const ResultatPage = () => {

    const [backendData, setBackendData] = useState(null);

    useEffect(() => {
      const getData = () => {
        fetch(port + "list")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setBackendData(data);
          });
          console.log(backendData);
      };
  
      getData();
    }, []);
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-vert-naturaliste bg-opacity-50">
            <BirdResult />
        </div>
    );
};

export default ResultatPage;