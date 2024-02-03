const PaletCard = () => {

const defaultStyle = "w-10 h-10 flex-shrink-0 rounded-full mr-2"
   return (
     <>
       <div className="flex flex-row">

          <div className={defaultStyle + " bg-search-gris"}/>
          <div className={defaultStyle + " bg-search-blanc"}/>
          <div className={defaultStyle + " bg-search-gris"}/>
          <div className={defaultStyle + " bg-search-gris-bleute"}/>
          <div className={defaultStyle + " bg-search-bleu"}/>
          <div className={defaultStyle + " bg-search-vert"}/>
          <div className={defaultStyle + " bg-search-jaune"}/>
          <div className={defaultStyle + " bg-search-orange"}/>
          <div className={defaultStyle + " bg-search-fauve"}/>
          <div className={defaultStyle + " bg-search-marron"}/>
          <div className={defaultStyle + " bg-search-noir"}/>

     </div>
     </>
   );
 };
export default PaletCard;
