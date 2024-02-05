const FindingLocationCards = ({ title, logoFileName, handleClick, selected }) => {
  
  const imagePath = `/lieux/${logoFileName}`;
  const finalPath = imagePath;

  const style = {
     backgroundColor: selected ? 'vert-naturaliste' : 'blanc-tourterelle', 
     // backgroundColor: selected ? 'ui-blanc-tourterelle' : 'ui-vert-naturaliste',
      borderColor: selected ? 'vert-naturaliste' : 'blanc-tourterelle', 
      color: selected ? 'vert-naturaliste' : 'blanc-plume',
  };

  return (
      <div onClick={handleClick} className={`w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] p-3 border border-${style.borderColor} rounded-md text-${style.color} bg-${style.backgroundColor} flex flex-col items-center justify-center`}>
          <img src={finalPath} alt={title} className={`w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] color-${style.color}`} />
          <h2 className={`font-poppins text-xs mt-1 text-${style.color}`}>{title}</h2>
      </div>
  );
};

export default FindingLocationCards;
