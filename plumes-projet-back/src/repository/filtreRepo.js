const con = require('../../app/database_sql');
module.exports = class filtreRepository {
        async getAllLieux() {
        return await con.promise().query("SELECT nom from lieux_de_trouvaille").then((result) => {
            return (result[0].length != 0 ? result[0] : null);
        })
    }
    async getAllTypesdePlumes() {
        return await con.promise().query("SELECT DISTINCT types_de_plumes from plumes").then((result) => {
            return (result[0].length != 0 ? result[0] : null);
        })
    }
    async getAllMotifs() {
        return await con.promise().query("SELECT nom from motifs").then((result) => {
            return (result[0].length != 0 ? result[0] : null);
        })
    }
    async getAllCouleurs() {
        return await con.promise().query("SELECT nom from couleur").then((result) => {
            return (result[0].length != 0 ? result[0] : null);
        })
    }
}