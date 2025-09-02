import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    // Add a default note/hint to every booking
    const bookingData = {
      ...req.body,
      note: 'Service booked. Status: Not completed. Please wait for confirmation.', // <-- Your hint
    };
    const booking = await Booking.create(bookingData);
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: 'Booking failed', details: err.message });
  }
});

export default router;