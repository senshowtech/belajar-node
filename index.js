const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes/index.js");
// set body form untuk ambil data dari form
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//  set hbs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
// routing
app.use("/belajar", routes);
// porting
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
