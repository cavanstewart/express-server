// import files and packages up here
const express = require("express");
const morgan = require("morgan");

// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan("dev"));

const router = express.Router();
app.use("/", router);

router.route("/").all(function(req, res, next) {
  res.status(200).send("hello world");
});

const data = require("./data.json");

router.route("/data").all(function(req, res, next) {
  res.json(data);
});

// finally export the express application
module.exports = app;
