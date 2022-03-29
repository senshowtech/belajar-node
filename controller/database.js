const db = require("../config/db.js");
exports.databaseQuery = (res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      return console.log(err);
    }
    res.send(result.rows[0]);
  });
};
