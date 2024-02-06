const con = require('../../app/database_sql');
module.exports = class oiseauRepository {

    async getAllOiseaux() {
        return await con.promise().query("SELECT o.nom AS NomOiseau, o.illustration AS illustration, ord.nom AS NomOrdre, f.nom AS NomFamille, p.illustration AS img_plumes FROM oiseaux o INNER JOIN posseder pos ON o.Id_Oiseaux = pos.Id_Oiseaux INNER JOIN plumes p ON pos.Id_Plumes = p.Id_Plumes INNER JOIN famille f ON o.Id_Famille = f.Id_Famille INNER JOIN ordre ord ON o.Id_Ordre = ord.Id_Ordre;").then((result) => {
            return (result[0].length != 0 ? result[0] : null);
        })
    }

    
    async search(couleurs, motifs, lieux,typePlume,taille) {
       let query ="SELECT oiseaux.nom, oiseaux.illustration, plumes.illustration AS img_plumes FROM oiseaux INNER JOIN posseder ON posseder.Id_Oiseaux = oiseaux.Id_Oiseaux LEFT JOIN plumes ON posseder.Id_Plumes = plumes.Id_Plumes WHERE oiseau posseder.Id_Plumes IN (SELECT colorier.Id_Plumes FROM colorier INNER JOIN couleurs ON colorier.Id_couleurs = couleurs.Id_couleurs INNER JOIN décorer ON colorier.Id_Plumes = décorer.Id_Plumes INNER JOIN plumes ON décorer.Id_Plumes = plumes.Id_Plumes INNER JOIN motifs ON décorer.Id_motifs = motifs.Id_motifs INNER JOIN trouver ON colorier.Id_Plumes = trouver.Id_Plumes INNER JOIN lieux_de_trouvaille ON trouver.Id_lieux_de_trouvaille = lieux_de_trouvaille.Id_lieux_de_trouvaille"

        // Vérification au cas où valeures nulles
        const whereConditions = [];
        let taillemax,taillemin
        if (taille == 0 || null) {
            taillemax = 0;
            taillemin = 500;

        }
        else{
            taillemax = taille;
            taillemin = taille;
        }

        
        if (couleurs !== null) whereConditions.push("couleurs.nom LIKE ?");
        if (motifs !== null) whereConditions.push("motifs.nom LIKE ?");
        if (lieux !== null) whereConditions.push("lieux_de_trouvaille.nom LIKE ?");
        if (typePlume != null) whereConditions.push("plumes.types_de_plumes = ?");
        if (whereConditions.length > 0) {
            query += " WHERE " + whereConditions.join(" AND ");
        }
        query += `);`;
        
        // Filtrer les valeurs nulles des paramètres
        const params = [taillemin,taillemax,couleurs, motifs, lieux,typePlume].filter(val => val !== null);
        console.log(params);
        console.log(query);
        return await con.promise().query(query,params).then((result)=>{
            
            return(result)
        })

    
    }
    
    

}