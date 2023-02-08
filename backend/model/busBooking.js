const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const busBookingSchema = new Schema({
  busId: {
    type: String,
    required: true,
  },
  journeyDate: {
    type: Date,
    required: true,
  },
  seatBooked: {
    type: Number,
    required: true,
  },
  routeId: { type: ObjectId, ref: "Routes" },
});

const BusBooking = mongoose.model("BusBooking", busBookingSchema);
module.exports = BusBooking;
