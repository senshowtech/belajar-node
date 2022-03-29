const { Pool } = require("pg");

const pool = new Pool({
  user: "sena",
  host: "localhost",
  database: "crud_belajar",
  password: "febrisena123",
  port: 5432,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
