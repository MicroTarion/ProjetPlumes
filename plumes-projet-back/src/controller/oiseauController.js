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
        console.log(req.body);
        let couleur = req.body.couleur || null;
        let motif = req.body.motif || null;
        let lieu = req.body.lieu || null;
        let typePlume = req.body.typePlume || null;
        let taille =  req.body.taille || null;
        const repo = new oiseauxRepo();
        repo.search(couleur,motif,lieu,typePlume,taille).then((result) => {
            // console.log(result);
            res.json(result);
        })
    }
    details(req, res){
        const repo = new oiseauxRepo();
        repo.result(req.body.Id_Oiseaux).then((result) => {
            res.json(result);
        })
    }


}
module.exports = new oiseauController();