const express = require("express");
const router = express.Router();
const {
  ticketbooking,
  showBookings,
  getSeatNo,
  postSeatNo,
  DeleteSeat,
  Deleteticket,
} = require("../controller/ticket");
const { getBerthDetails, UpdateBerth } = require("../controller/berth");
const { protect } = require("../middleware/auth");

router.post("/ticket", protect, ticketbooking);
router.get("/tickets", protect, showBookings);
router.get("/seats", protect, getSeatNo);
router.post("/seat", protect, postSeatNo);
router.delete("/seatRemove/:id", protect, DeleteSeat);
router.delete("/bookingRemove/:id", protect, Deleteticket);
router.get("/getBerthDetails", protect, getBerthDetails);
router.put("/UpdateBerth/:id", protect, UpdateBerth);

module.exports = router;
