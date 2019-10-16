const Booking = require("../models/Booking");

module.exports = {
  async store(req, res) {
    const { bookings_id } = req.params;

    const booking = await Booking.findById(bookings_id).populate("spot");

    booking.approved = true;

    await booking.save();

    return res.json(booking);
  }
};
