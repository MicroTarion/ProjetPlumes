/* eslint-disable react/prop-types */
const FindingLocationCards = ({ title, logoFileName }) => {
  
    const imagePath = `/lieux/${logoFileName}`;
  
    return (
      <div className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] p-3 border border-ui-vert-naturaliste rounded-md text-ui-vert-naturaliste bg-blanc-tourterelle flex flex-col items-center justify-center">
        <img src={imagePath} alt={title} className="color-vert-naturaliste w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]" />
        <h2 className="text-vert-naturaliste font-poppins text-xs mt-1">{title}</h2>
      </div>
    );
  };
  
  export default FindingLocationCards;
  