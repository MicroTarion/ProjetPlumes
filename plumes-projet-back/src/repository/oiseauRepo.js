const con = require('../../app/database_sql');
module.exports = class oiseauRepository {
    
    async getAllOiseaux() {
        return await con.promise().query("SELECT `oiseaux`.*, `plumes`.`Id_Plumes`, `plumes`.`illustration` AS `img_plumes`, `plumes`.`types de plumes`FROM `oiseaux`LEFT JOIN `posseder` ON `posseder`.`Id_Ordre` = `oiseaux`.`Id_Ordre` AND `posseder`.`Id_Famille` = `oiseaux`.`Id_Famille` AND `posseder`.`Id_Oiseaux` =`oiseaux`.`Id_Oiseaux`LEFT JOIN `plumes` ON `posseder`.`Id_Plumes` = `plumes`.`Id_Plumes`").then((result) => {
            return (result[0].length != 0 ? result[0] : null);
        })
    }
};