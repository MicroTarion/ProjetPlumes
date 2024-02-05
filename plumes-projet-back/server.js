require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

var whitelist = [process.env.HTTP_ADDR]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1|| !origin) {
      callback(console.log('Connection autorisée'), true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(express.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(express.json());
app.use(cors())
app.get("/",(req,res)=> {
    res.json("lien établi")
})
app.get("/api",(req,res)=> {
    res.json({
        "users": ["userone","usertwo","userthree"]
    })
})

app.get("/api/oiseau",(req,res)=> {
   let oiseauController = require("../plumes-projet-back/src/controller/oiseauController");
   oiseauController.index(req,res)
})

app.get("/list",(req,res)=> {
    let oiseauController = require("../plumes-projet-back/src/controller/oiseauController.js");
    oiseauController.listAll(req,res)
})
app.post("/search",cors(corsOptions),(req,res)=> {
    let oiseauController = require("../plumes-projet-back/src/controller/oiseauController.js");
    oiseauController.search(req,res)
})

app.get('/api/plume',cors(corsOptions),(req,res)=> {
    let plumeController = require("../plumes-projet-back/src/controller/plumeController.js");
    console.log("plumeController",plumeController);
    plumeController.listAll(req,res)
})

// app.get("/api/plume",(req,res)=> {
//     res.json({
//         "plume": 
//             {"couleur" : "bleu",
//             "type": "machin scientifique 2",
//             "taille": "10 cm",
//             "illustration":"src/public/img/blblbl.jpg"}
//     })
// })

app.listen(5000, ()=> {console.log("Server start on port http://localhost:5000")})