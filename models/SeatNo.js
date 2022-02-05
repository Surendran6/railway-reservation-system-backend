const mongoose = require("mongoose");

const SeatNoSchema = new mongoose.Schema({
  seatNo: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("seats", SeatNoSchema);
