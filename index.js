//const dados = require("./Dados/banco.json");
const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const Series = require("./models/Series");

//Transformando ejs em html
app.engine('html',require('ejs').renderFile);
app.set('views engine','html');

app.use(express.static('public'));
app.use(express.static(__dirname + '/public'))

//usando BodyParser
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({
    extended: true
}));


app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({
    extended: true
}));



const PORT = 8080;


const db = "Eco"

const url = `mongodb://127.0.0.1:27017/${db}`;

mongoose.connect(url).then((e) => console.table({0:{'Banco de Dados':db,teste:e}})).catch(err => console.error(err))

const home = require("./routes/home.js");
const musica = require("./routes/musica.js");
const playlistDb = require("./routes/playlist.js");
//const admin = require("./routes/admin.js");

app.use("/",home);
app.use("/musica",musica);
app.use("/playlist",playlistDb);


const rotas = ["musica","playlist"]

app.listen(PORT,() => {
    console.log("rodando porta 8000")
    console.log(`http://localhost:${PORT}/`)
    rotas.map(e => console.log(`http://localhost:${PORT}/${e}`))
    

})


