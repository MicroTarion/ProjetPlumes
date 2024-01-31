require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get("/",(req,res)=> {
    res.json("lien établi")
})
app.get("/api",(req,res)=> {
    res.json({
        "users": ["userone","usertwo","userthree"]
    })
})
app.post("/search",(req,res)=> {
    res.json({
        "users": ["userone","usertwo","userthree"]
    })
    let oiseauController = require("../plumes-projet-back/src/controller/oiseauController");
    oiseauController.index(req,res)
})
app.get("/api/oiseau",(req,res)=> {
   let oiseauController = require("../plumes-projet-back/src/controller/oiseauController");
   oiseauController.index(req,res)
})

app.get("/list",(req,res)=> {
    let oiseauController = require("../plumes-projet-back/src/controller/oiseauController.js");
    oiseauController.listAll(req,res)
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