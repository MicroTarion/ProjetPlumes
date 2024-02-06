import DatavizCards from "./DatavizCards";  
const BirdResult = () => {
    return (
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center mb-4">
          <img src="" alt="Bird Example" className="w-12 h-12 mr-4" />
          <div className="text-noir-corbeau">
            <h1 className="font-f37-attila text-1.875rem font-semibold">Un oiseua</h1>
            <h4 className="font-poppins text-0.8125rem italic">nom scientifique</h4>
            <p className="text-poppins text-0.8125rem">Famille</p>
            <p className="text-poppins text-0.8125rem">ordre</p>
          </div>
        </div>
        <div className="flex flex-row items-center mb-4">
          <DatavizCards/>
        </div>
        <div className="flex flex-row items-center">
          <h2 className="font-poppins text-1.1875rem font-semibold text-blanc-plume">Description</h2>
          <p className="text-poppins text-0.8125rem">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    );
  };

  export default BirdResult