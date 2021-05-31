const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const taskRoute = require("./routes/taskRoute");
const app = express();

dotenv.config({ path: "./config.env" });

//Saving static files
app.use(express.static(`${__dirname}/public`));

app.use(express.json());

app.use("/api/v1/users", userRoute);
app.use("/api/v1/tasks", taskRoute);

module.exports = app;
