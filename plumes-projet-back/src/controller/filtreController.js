const filtreRepository = require('../repository/filtreRepo');

class filtreController{
        
        listLieux(req, res) { 
            const repo = new filtreRepository();
            repo.getAllLieux().then((result) => {
                console.log(result);
                res.json(result);
            })
        }
        listMotifs(req, res) { 
            const repo = new filtreRepository();
            repo.getAllMotifs().then((result) => {
                console.log(result);
                res.json(result);
            })
        }
        listCouleurs(req, res) { 
            const repo = new filtreRepository();
            repo.getAllCouleurs().then((result) => {
                console.log(result);
                res.json(result);
            })
        }
        listTypes(req, res) { 
            const repo = new filtreRepository();
            repo.getAllTypesdePlumes().then((result) => {
                console.log(result);
                res.json(result);
            })
        }
        

    }

module.exports = new filtreController();