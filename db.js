// Database connection code.
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect("mongodb://mongo:27017/bookstore")
      // MongoClient.connect("mongodb://127.0.0.1:27017/bookstore")
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