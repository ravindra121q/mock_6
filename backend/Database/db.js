const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://ravindra:ravindra@cluster0.orefmbc.mongodb.net/mock_5?retryWrites=true&w=majority"
);
module.exports = { connection };
