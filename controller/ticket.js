const { request } = require("express");
const Booking = require("../models/Booking");
const SeatNo = require("../models/SeatNo");

exports.ticketbooking = async (req, res) => {
  const {
    userId,
    bookingName,
    age,
    gender,
    berth,
    seat,
    ticketno,
    train,
    pnr,
    date,
  } = req.body?.bookingDetails;
  try {
    const ticket = await Booking.create({
      userId,
      bookingName,
      age,
      gender,
      berth,
      seat,
      ticketno,
      train,
      pnr,
      date,
    });
    return res.status(200).json({
      success: true,
      message: "Booked Successfully",
      ticket,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

exports.Updatebooking = async (req, res) => {
  const {
    userId,
    bookingName,
    age,
    gender,
    berth,
    seat,
    ticketno,
    train,
    pnr,
    date,
  } = req.body?.ticket;

  const updateBook = await Booking.findById(req.params.id);

  if (updateBook) {
    updateBook.userId = userId;
    updateBook.bookingName = bookingName;
    updateBook.age = age;
    updateBook.gender = gender;
    updateBook.berth = berth;
    updateBook.seat = seat;
    updateBook.ticketno = ticketno;
    updateBook.train = train;
    updateBook.pnr = pnr;
    updateBook.date = date;
    const updatedetails = await updateBook.save();
    res.json(updatedetails);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
};

exports.Deleteticket = async (req, res) => {
  const booking = await Booking.findById(req.params.id);

  if (booking) {
    await booking.remove();
    res.json({ message: "booking  Removed" });
  } else {
    res.status(404);
    throw new Error("booking  not Found");
  }
};

exports.showBookings = async (req, res) => {
  try {
    let books = await Booking.find(function (err, result) {
      if (err) {
        throw err;
      }
    });
    return res.status(200).json({
      success: true,
      books,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
};
exports.getUserTickets = async (req, res) => {
  try {
    let tickets = await Booking.find({ userId: req.params.id }, function (err, result) {
      if (err) {
        throw err;
      }
    });
    return res.status(200).json({
      success: true,
      tickets,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
};
exports.getSeatNo = async (req, res) => {
  try {
    let seats = await SeatNo.find(function (err, result) {
      if (err) {
        throw err;
      }
    });
    return res.status(200).json({
      success: true,
      seat: seats[0],
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.postSeatNo = async (req, res) => {
  const { seatNo } = req.body.seatDetails;
  try {
    const seat = await SeatNo.create({
      seatNo,
    });
    return res.status(200).json({
      success: true,
      message: "Successfully",
      seat,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

exports.DeleteSeat = async (req, res) => {
  console.log(req.params.id);
  const seat = await SeatNo.findById(req.params.id);

  if (seat) {
    await seat.remove();
    res.json({ message: "seat Removed" });
  } else {
    res.status(404);
    throw new Error("seat not Found");
  }
};
