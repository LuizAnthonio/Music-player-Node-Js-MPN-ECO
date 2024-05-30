const fs = require("fs");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const music = new Schema({

    nome:String,
    dir:String,
    categorias: Array,
    ano:Number,
    capa:String,
    autor:String,
    album:String,
    cor:String,
    
},{collection:"musicas"});

const Music = mongoose.model("musicas",music);

module.exports = Music;

