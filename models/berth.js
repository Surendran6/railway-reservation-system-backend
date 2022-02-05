const mongoose = require("mongoose");

const BerthSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  total: {
    type: String,
  },
  available: {
    type: String,
  },
});

module.exports = mongoose.model("berths", BerthSchema);
