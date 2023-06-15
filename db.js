// Database connection code.
const { MongoClient } = require("mongodb");
// const dotenv = require("dotenv");

// dotenv.config();

// const url = process.env.MONGO_URI_LOCAL;

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect("mongodb://mongo/bookstore")
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};