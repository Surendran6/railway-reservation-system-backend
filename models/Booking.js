const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  bookingName: {
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
  },
  seat: {
    type: Number, 
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
