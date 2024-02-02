const con = require('../../app/database_sql');
module.exports = class oiseauRepository {
    
    async getAllOiseaux() {
        return await con.promise().query("SELECT o.nom AS NomOiseau, o.illustration AS illustration, ord.nom AS NomOrdre, f.nom AS NomFamille, p.illustration AS img_plumes FROM oiseaux o INNER JOIN posseder pos ON o.Id_Oiseaux = pos.Id_Oiseaux INNER JOIN plumes p ON pos.Id_Plumes = p.Id_Plumes INNER JOIN famille f ON o.Id_Famille = f.Id_Famille INNER JOIN ordre ord ON o.Id_Ordre = ord.Id_Ordre;").then((result) => {
            return (result[0].length != 0 ? result[0] : null);
        })
    }
    async search(couleur,motifs,lieu){
        return await con.promise().query(
            "SELECT oiseaux.nom, oiseaux.illustration, plumes.illustration AS img_plumes FROM oiseaux INNER JOIN posseder ON posseder.Id_Oiseaux = oiseaux.Id_Oiseaux LEFT JOIN plumes ON posseder.Id_Plumes = plumes.Id_Plumes WHERE posseder.Id_Plumes IN (SELECT colorier.Id_Plumes FROM colorier INNER JOIN couleurs ON colorier.Id_couleurs = couleurs.Id_couleurs INNER JOIN décorer ON colorier.Id_Plumes = décorer.Id_Plumes INNER JOIN motifs ON décorer.Id_motifs = motifs.Id_motifs INNER JOIN trouver ON colorier.Id_Plumes = trouver.Id_Plumes INNER JOIN lieux_de_trouvaille ON trouver.Id_lieux_de_trouvaille = lieux_de_trouvaille.Id_lieux_de_trouvaille WHERE couleurs.nom LIKE ? AND motifs.nom LIKE ? AND lieux_de_trouvaille.nom LIKE ?);",            [couleur, motifs, lieu])
            .then((result) => {
                return (result);
            })
        }
}