const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  berth: {
    type: String,
    required: true,
  },
  seat: {
    type: Number,
    required: true,
  },
  ticketno: {
    type: Number,
    default: Math.floor(Math.random() * 10000 + 1),
  },
  train: {
    type: Number,
    default: 4443759,
  },
  pnr: {
    type: Number,
    default: Math.floor(Math.random() * 1000000 + 1),
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
