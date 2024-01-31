class oiseauController{
    
    index(req, res) {
        res.json({
            "bird": ["test","test"]
        })
    }
    listAll(req, res) { 
       //TODO Select *
    }

}
module.exports = new oiseauController();