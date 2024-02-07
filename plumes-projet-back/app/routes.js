const cors = require('cors');
let oiseauController = require("../src/controller/oiseauController.js");
let plumeController = require("../src/controller/plumeController.js");
let filtreController = require('../src/controller/filtreController.js');


var whitelist = [process.env.HTTP_CLIENT, process.env.HTTP_SERVER]
console.log(whitelist);
var corsOptions = {
  origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        console.log(whitelist.indexOf(origin))
      callback(console.log('Connection autorisée'), true)
    } else {
        console.log(origin);
        console.log(whitelist.indexOf(origin))
      callback(new Error('Not allowed by CORS'));
    }
  }
}


module.exports = (app) => {

  console.log(corsOptions);
  app.use(cors())

    app.get("/", (req, res) => {
        res.json("lien établi")
    })

    app.get("/list", (req, res) => {
        oiseauController.listAll(req, res)
    })
    app.post("/search", (req, res) => {
        oiseauController.search(req, res)
    })
    app.get("/result", (req, res) => {
      oiseauController.details(req, res)
    })
  
    //Recup des filtres en BDD
    app.get("/motifs", (req, res) => {
      filtreController.listMotifs(req, res)
    })
    app.get("/couleurs", (req, res) => {
      filtreController.listCouleurs(req, res)
    })
    app.get("/lieux", (req, res) => {
      filtreController.listLieux(req, res)
    })
    app.get("/types", (req, res) => {
      filtreController.listTypes(req, res)
    })

    app.get('/api/plume', (req, res) => {

        console.log("plumeController", plumeController);
        plumeController.listAll(req, res)
    })
}