const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "./config.env" });

//Saving static files
app.use(express.static(`${__dirname}/public`));

module.exports = app;
