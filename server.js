//=============================
//      Dependencies
//=============================

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Database
const pokemonDB = require("./models/pokemon.js");

//=============================
// Required Middleware Engine
//=============================
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//=============================
//          Routers
//=============================

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

//List of pokemon
app.get("/pokemon", (req, res) => {
  res.render("Index.jsx", {
    pokemon: pokemonDB,
  });
});
app.get("/pokemon/:id", (req, res) => {
  res.render("Show.jsx", {
    pokemon: pokemonDB[req.params.id],
  });
});

//=============================
// Listening on Port 3000
//=============================
app.listen(port, (req, res) => {
  console.log(`Ascoltando al porto... ${port}`);
});
