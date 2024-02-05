import React from 'react';
import TitleBarre from "../../components/common/TitleBarre";
import lexiqueImage from "../../../public/dataviz/aileOiseauLexique.png";
import remigeImage from "../../../public/dataviz/plumeLexique.svg";

const LexiquePage = () => {
    // Tableau des titres de colonnes
    const titresColonnes = [
        "Rémiges primaires",
        "Couverture Primaire",
        "ALULA",
        "REMIGES SECONDAIRE",
        "GRANDE COUVERTURE",
        "COUVERTURE MEDIANE",
        "PETITE COUVERTURE",
        "REMIGE TERTIAIRE",
        "PLUME SCAPULAIRE"
    ];

    return (
        <div>
            <TitleBarre />

            {/* Nouvelle section */}
            <div style={{ backgroundColor: '#87CEEB', padding: '20px' }}>
                

                {/* Image Lexique centrée */}
                <img
                    src={lexiqueImage}
                    alt="Image Lexique"
                    style={{
                        width: '80%', // Réduire la taille de l'image à 80%
                        maxWidth: '600px',
                        display: 'block',
                        margin: '0 auto', // Centrer l'image horizontalement
                    }}
                />
                
                <p style={{ color: '#008c8c', textAlign: 'center', marginTop: '10px' }}>Plumes des ailes</p>

                {/* Tableau avec Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '20px' }}>
                    {Array.from({ length: 9 }, (_, index) => (
                        <div key={index} style={{ border: '1px solid #008c8c', padding: '10px', borderRadius: '5px' }}>
                            <strong>{index + 1}. {titresColonnes[index]}</strong>
                           
                        </div>
                    ))}
                </div>

                {/* ... (le reste du code reste inchangé) ... */}

                {/* Image "Rémige Primaires externe" avec texte à côté et en dessous */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', marginTop: '20px' }}>
                    <img
                        src={remigeImage}
                        alt="Rémige Image"
                        style={{
                            width: '80px',
                            height: 'auto',
                            marginRight: '20px',
                        }}
                    />
                    <div style={{ maxWidth: '400px' }}>
                        <p>Grande plume rigide de l'aile d'un oiseau.</p>
                        <br />
                        <p>Comment la reconnaître?</p>
                        <br />
                        <p>. Son calamus est long et assez droit.</p>
                        <p>. Son rachis est légèrement courbé.</p>
                        <p>. Son vexile externe est plus étroit que le vexile interne.</p>
                        <p>. Il est possible qu'elle présente des émarginations et des échancrures.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LexiquePage;
