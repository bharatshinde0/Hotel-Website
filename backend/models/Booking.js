import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    roomType: {
      type: String,
      required: true,
      trim: true
    },
    checkIn: {
      type: String,
      required: true
    },
    checkOut: {
      type: String,
      required: true
    },
    guests: {
      type: Number,
      required: true,
      min: 1
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
