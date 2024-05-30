const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Music = require("../models/music");
const Playlist = require("../models/Playlist");
const router = express.Router();



router.get("/:id", async (req,res) => {

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

    

    const music = await Music.find({_id:req.params.id});

    console.log(music)

    res.render("home.html",{musica:music[1]})
})

router.get("/album/:ab", async (req, res) => {
    const ab = req.params.ab;

    // Use the correct field for querying (album instead of _id)
    const music = await Music.find({ album: ab });

    console.log(music);

    let obj = {}

    obj.nome = music[0].album
    //obj.autor = 
    obj.ano = music[0].ano
    obj.capa = music[0].capa
    obj.user = {nome:music[0].autor}
    obj.playlist = music
    obj.bg = ""
    obj.color = ""
    

    res.render("album.html", { musicas: obj, album: ab,tocar:null });
});


router.get("/playlist/:id", async (req, res) => {
    const id = req.params.id;

    // Use the correct field for querying (album instead of _id)
    //const music = await Music.find({ album: ab });

    const playlist = await Playlist.find({_id:id}).populate("playlist").populate("user")
    console.log(playlist);

    res.render("playlist.html", { musicas: playlist[0].playlist, album: playlist[0].nome,tocar:"" });

});

router.get("/playlist/:id/:index", async (req, res) => {
    const {id, index} = req.params;

    const playlist = await Playlist.find({_id:id}).populate("playlist").populate("user")
    console.log(playlist);

    res.render("playlist.html", { musicas: playlist[0].playlist, album: playlist[0].nome, tocar: playlist[0].playlist[parseInt(index)][0]});
});






module.exports = router;