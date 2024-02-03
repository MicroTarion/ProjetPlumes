const con = require('../../app/database_sql');


module.exports = class plumeRepository {
    async getAllPlumes() {
        return await con.promise().query("SELECT * FROM plumes").then((result) => {
            return (result[0].length != 0 ? result[0] : null);
        })
    }
}