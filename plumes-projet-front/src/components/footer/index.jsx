import Typography from "../common/Typography";

function Footer() {
    const isMobile = window.innerWidth <= 640; // Choisissez une valeur appropriée pour définir ce qui est considéré comme "mobile"

    return (
        <div className="w-full sm:h-[1vh] md:h-[1.5vh] flex justify-center bg-blanc-tourterelle p-5 md:p-10">
            <Typography Tag={isMobile ? "p" : "h3"} customClasses="font-poppins text-xs lg:text-base text-ui-vert-naturaliste text-center">
                La Passerelle Projet Plumes 2024 © Sarah Berthe Lecomte
            </Typography>
        </div>
    );
}

export default Footer;