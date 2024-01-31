import { useEffect,useState } from "react";
const port = "http://localhost:5000/"
const HomePage = () => {
    const [backendData,setBackendata] = useState([])
    useEffect(()=>{
        const getData = () =>{
            
            fetch(port+"api").then(
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
            
            <div>
                {(!backendData.users)?(
                    <p>
                       Loading... 
                    </p>
                ):(
                    
                    backendData.users.map((user,i)=>{
                        return <p key={i}>{user}</p>
                    })
                )}
            </div>
           
        </div>
    );
}

export default HomePage