const mongoose = require("mongoose");

const db = mongoose.connect(process.env.MONGO_URI);

db ? console.log("Connected to DB") : console.log("Error Connecting to DB");

module.exports = db;
