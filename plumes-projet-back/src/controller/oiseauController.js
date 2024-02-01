const oiseauxRepo = require('../repository/oiseauRepo.js');

class oiseauController{
    
    index(req, res) {
        res.json({
            "bird": ["test","test"]
        })
    }
    listAll(req, res) { 
        const repo = new oiseauxRepo();
        repo.getAllOiseaux().then((result) => {
            console.log(result);
            res.json(result);
        })
    }

}
module.exports = new oiseauController();