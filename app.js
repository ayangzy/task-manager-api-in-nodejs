const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const taskRoute = require("./routes/taskRoute");
const app = express();

dotenv.config({ path: "./config.env" });

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("Get request are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("site is currently down, check back soon");
// });
//Saving static files
app.use(express.static(`${__dirname}/public`));

app.use(express.json());

app.use("/api/v1/users", userRoute);
app.use("/api/v1/tasks", taskRoute);

module.exports = app;
