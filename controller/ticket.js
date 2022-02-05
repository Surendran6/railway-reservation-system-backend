const Booking = require("../models/Booking");
const SeatNo = require("../models/SeatNo");

exports.ticketbooking = async (req, res) => {
  const { userid, name, age, gender, berth, seat, ticketno, train, pnr, date } =
    req.body;
  try {
    const ticket = await Booking.create({
      userid,
      name,
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

exports.getSeatNo = async (req, res) => {
  try {
    let seats = await SeatNo.find(function (err, result) {
      if (err) {
        throw err;
      }
    });
    return res.status(200).json({
      success: true,
      seats,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.postSeatNo = async (req, res) => {
  const { seatNo } = req.body;
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
  const seat = await SeatNo.findById(req.params.id);

  if (seat) {
    await seat.remove();
    res.json({ message: "seat Removed" });
  } else {
    res.status(404);
    throw new Error("seat not Found");
  }
};
