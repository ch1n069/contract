const http = require("http");
const dotenv = require("dotenv");
const PORT = 3000;

const app = require("./app");
const { connection, sequelize } = require("./config/db");

dotenv.config();
console.log("frfefr", process.env.DB_HOST);

connection.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
  } else {
    console.log("Connected to MySQL successfully");
  }
});
const server = http.createServer(app);
sequelize
  .sync()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Sequelize sync error:", error);
  });

// server.listen(PORT);
