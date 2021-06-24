const express = require("express");
const controllerGames = require("../controllers/gamesController");

const rounter = express.Router();

rounter.route("/games").get(controllerGames.gamesGetAll);
module.exports = rounter;
