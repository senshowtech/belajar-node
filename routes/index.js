const express = require("express");
const router = express.Router();
const { arrayFunction } = require("../controller/array.js");
const { databaseQuery } = require("../controller/database.js");

router.get("/testing", (req, res) => {
  return res.render("index", { list: arrayFunction() });
});

router.get("/form", (req, res) => {
  return res.render("form");
});

router.post("/create", (req, res) => {
  return console.log(req.body.name);
});

router.get("/query", (req, res) => {
  databaseQuery(res);
});

module.exports = router;
