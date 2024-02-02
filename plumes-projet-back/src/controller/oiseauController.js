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
    search(req, res) {
        let couleur = req.body.color || '';
        let motif = req.body.motif || '';
        let lieu = req.body.lieu || '';
        const repo = new oiseauxRepo();
        repo.search(couleur,motif,lieu).then((result) => {
            console.log(result);
            res.json(result);
        })
    }

}
module.exports = new oiseauController();