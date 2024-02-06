const con = require('../../app/database_sql');
module.exports = class filtreRepository {
        async getAllLieux() {
        return await con.promise().query("SELECT nom from lieux_de_trouvaille").then((result) => {
            return (result[0].length != 0 ? result[0] : null);
        })
    }
    async getAllPlumes() {
        return await con.promise().query("SELECT * from plumes").then((result) => {
            return (result[0].length != 0 ? result[0] : null);
        })
    }
    async getAllMotifs() {
        return await con.promise().query("SELECT nom from motifs").then((result) => {
            return (result[0].length != 0 ? result[0] : null);
        })
    }
    async getAllCouleur() {
        return await con.promise().query("SELECT nom from couleur").then((result) => {
            return (result[0].length != 0 ? result[0] : null);
        })
    }
}