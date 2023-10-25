const mysql = require("mysql2");
const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "./.env" });

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", "root");
console.log("DB_PASSWORD:", "newpassword");
console.log("DB_NAME:", "contracts");

connection.connect((err) => {
  let message = !err ? "connected successfully" : "connection failed";
  console.log(message);
  console.log("erroris ", err);
});

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

module.exports = {
  development: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  sequelize,
  connection,
};
