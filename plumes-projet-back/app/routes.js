const cors = require('cors');
let oiseauController = require("../src/controller/oiseauController.js");
let plumeController = require("../src/controller/plumeController.js");
let filtreController = require('../src/controller/filtreController.js');


var whitelist = [process.env.HTTP_SERVER, process.env.HTTP_CLIENT]
var corsOptions = {
  origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        console.log(whitelist.indexOf(origin))
      callback(console.log('Connection autorisée'), true)
    } else {
        console.log(origin);
      callback(new Error('Not allowed by CORS'));
    }
  }
}


module.exports = (app) => {

    app.get("/", (req, res) => {
        res.json("lien établi")
    })

    app.get("/list", cors(corsOptions), (req, res) => {
        oiseauController.listAll(req, res)
    })
    app.post("/search", cors(corsOptions), (req, res) => {
        oiseauController.search(req, res)
    })
    app.get("/result", cors(corsOptions), (req, res) => {
      oiseauController.details(req, res)
    })

    //Recup des filtres en BDD
    app.get("/motifs", cors(corsOptions), (req, res) => {
      filtreController.listMotifs(req, res)
    })
    app.get("/couleurs", cors(corsOptions), (req, res) => {
      filtreController.listCouleurs(req, res)
    })
    app.get("/lieux", cors(corsOptions), (req, res) => {
      filtreController.listLieux(req, res)
    })
    app.get("/types", cors(corsOptions), (req, res) => {
      filtreController.listTypes(req, res)
    })

    app.get('/api/plume', cors(corsOptions), (req, res) => {
        console.log("plumeController", plumeController);
        plumeController.listAll(req, res)
    })
}