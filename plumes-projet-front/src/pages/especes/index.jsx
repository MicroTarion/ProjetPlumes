import { useEffect,useState } from "react";
const port = "http://localhost:5000/"
const EspecesPage = () => {
    const [backendData,setBackendata] = useState([])
    useEffect(()=>{
        const getData = () =>{
            
            fetch(port+"list").then(
                response => response.json()
            ).then(
                data => {
                    console.log(data);
                    setBackendata(data)
                }
            )
        }
        getData()
        console.log('test');
    },[])
    return (
        <div className="App">
            
            <div className="grid grid-cols-3">
                {
                    backendData.map((oiseaux)=>{
                        return (
                            <>
                            <div key={oiseaux.Id_Oiseaux}>
                            <h4>{oiseaux.nom}</h4>
                                <div className="flex">
                                    <img className="w-[10rem]" src={`public/illustrations/illustrations-oiseaux/${oiseaux.illustration}.jpeg`} alt="" />
                                    <img className="w-[10rem]" src={`public/illustrations/plumes-oiseaux/${oiseaux.img_plumes}.jpg`} alt="" />
                                </div>
                            </div>
                            </>
                            
                            ) 
                    })
                }
            </div>
           
        </div>
    );
}
 
export default EspecesPage;