const express = require("express");
const router = express.Router();
const {
  ticketbooking,
  showBookings,
  getSeatNo,
  postSeatNo,
  DeleteSeat,
  Deleteticket,
  getUserTickets,
} = require("../controller/ticket");
const { getBerthDetails, UpdateBerth } = require("../controller/berth");
const { protect } = require("../middleware/auth");

router.post("/ticket",protect,  ticketbooking);
router.get("/tickets",  showBookings);
router.get("/getUserTickets/:id", getUserTickets);
router.get("/seats", getSeatNo);
router.post("/seat",  postSeatNo);
router.delete("/seatRemove/:id",  DeleteSeat);
router.delete("/bookingRemove/:id",  Deleteticket);
router.get("/getBerthDetails",  getBerthDetails);
router.put("/UpdateBerth/:id",  UpdateBerth);

module.exports = router;
