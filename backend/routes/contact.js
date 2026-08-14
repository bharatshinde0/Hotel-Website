import express from "express";
import mongoose from "mongoose";
import Contact from "../models/Contact.js";

const router = express.Router();
const fallbackMessages = [];

const isMongoConnected = () => mongoose.connection.readyState === 1;

router.get("/", async (_req, res) => {
  try {
    if (isMongoConnected()) {
      const messages = await Contact.find().sort({ createdAt: -1 });
      return res.json(messages);
    }

    return res.json(fallbackMessages);
  } catch (error) {
    return res.status(500).json({ message: "Unable to load messages", error: error.message });
  }
});

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Please fill in all contact fields." });
  }

  try {
    if (isMongoConnected()) {
      const contact = await Contact.create({ name, email, subject, message });
      return res.status(201).json({ message: "Message sent successfully.", contact });
    }

    const contact = {
      id: crypto.randomUUID(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString()
    };
    fallbackMessages.unshift(contact);
    return res.status(201).json({ message: "Message sent successfully.", contact });
  } catch (error) {
    return res.status(500).json({ message: "Unable to send message", error: error.message });
  }
});

export default router;
