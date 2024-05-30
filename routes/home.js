const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Music = require("../models/music");
const router = express.Router();



router.get("/", async (req,res) => {

    /*
    await Music.create({
        nome:"Rockstar",
        dir:"/music/Rockstar.mp3",
        categorias: ["feel good","rock","emocionante"],
        ano:2018,
        capa:"https://i1.sndcdn.com/artworks-000263607755-qq1t0i-t500x500.jpg",
        autor:"Post Malone",
        album:"Rockstar"
    })
    */

    

    const music = await Music.find({});

    console.log(music)

    res.render("listagem.html",{musicas:music,tocar:null})
})

router.get("/musica/:id", async (req,res) => {
    
    const {id} = req.params

    const music = await Music.find({_id:id});

    console.log(music)

    res.render("home.html",{musica:music[0]})
})










module.exports = router;