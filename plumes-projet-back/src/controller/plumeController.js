 const plumeRepository = require('../repository/plumeRepo');

class plumeController{
        
        index(req, res) {
            res.json({
                "plume": ["test","test"]
            })
        }
        listAll(req, res) { 
            const repo = new plumeRepository();
            repo.getAllPlumes().then((result) => {
                console.log(result);
                res.json(result);
            })
        }
    }

module.exports = new plumeController();