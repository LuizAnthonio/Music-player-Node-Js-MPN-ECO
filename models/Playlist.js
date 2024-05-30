const { ObjectId } = require("bson");
const fs = require("fs");
const mongoose = require("mongoose");
const User = require("./User");

const Schema = mongoose.Schema;


const playlist = new Schema({

    nome:String,
    playlist: {type:Schema.Types.Array, ref:"musicas"},
    ano:Number,
    capa:String,
    user:{type: Schema.Types.ObjectId, ref:"user"},
    bg:String,
    color:String,
    
    
},{collection:"playlist"});

const Playlist = mongoose.model("playlist",playlist);

module.exports = Playlist;

