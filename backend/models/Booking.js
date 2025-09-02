import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  serviceId: Number,
  serviceName: String,
  user: {
    name: String,
    email: String,
  },
  details: Object,
  note: String, // <-- Add this field
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Booking', bookingSchema);