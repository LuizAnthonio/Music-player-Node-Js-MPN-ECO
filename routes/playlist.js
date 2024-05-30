const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const Music = require("../models/music");
const Playlist = require("../models/Playlist");
const router = express.Router();




router.get("/:id", async (req, res) => {
    const id = req.params.id;

    // Use the correct field for querying (album instead of _id)
    //const music = await Music.find({ album: ab });

    const playlist = await Playlist.find({_id:id}).populate("playlist").populate("user")
    console.log(playlist);

    res.render("playlist.html", { musicas: playlist[0], album: playlist[0].nome,tocar:null });
});



router.get("/:id/:index", async (req, res) => {
    const {id, index} = req.params;

    const playlist = await Playlist.find({_id:id}).populate("playlist").populate("user")
    console.log(playlist);
    console.log(playlist[0].playlist[parseInt(index)]);
    


    res.render("playlist.html", { musicas: playlist[0], album: playlist[0].nome, tocar: playlist[0].playlist[parseInt(index)]});
});






module.exports = router;