import express from "express";
import mongoose from "mongoose";
import Booking from "../models/Booking.js";

const router = express.Router();
const fallbackBookings = [];

const isMongoConnected = () => mongoose.connection.readyState === 1;

router.get("/", async (_req, res) => {
  try {
    if (isMongoConnected()) {
      const bookings = await Booking.find().sort({ createdAt: -1 });
      return res.json(bookings);
    }

    return res.json(fallbackBookings);
  } catch (error) {
    return res.status(500).json({ message: "Unable to load bookings", error: error.message });
  }
});

router.post("/", async (req, res) => {
  const { fullName, email, phone, roomType, checkIn, checkOut, guests } = req.body;

  if (!fullName || !email || !phone || !roomType || !checkIn || !checkOut || !guests) {
    return res.status(400).json({ message: "Please fill in all booking fields." });
  }

  try {
    if (isMongoConnected()) {
      const booking = await Booking.create({ fullName, email, phone, roomType, checkIn, checkOut, guests });
      return res.status(201).json({ message: "Booking request received.", booking });
    }

    const booking = {
      id: crypto.randomUUID(),
      fullName,
      email,
      phone,
      roomType,
      checkIn,
      checkOut,
      guests: Number(guests),
      createdAt: new Date().toISOString()
    };
    fallbackBookings.unshift(booking);
    return res.status(201).json({ message: "Booking request received.", booking });
  } catch (error) {
    return res.status(500).json({ message: "Unable to save booking", error: error.message });
  }
});

export default router;
