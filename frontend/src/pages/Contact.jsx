import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

const apiUrl = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");

const initialMessage = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

function Contact() {
  const [form, setForm] = useState(initialMessage);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Message failed");
      }

      setStatus("Thank you. Your message has been sent successfully.");
      setForm(initialMessage);
    } catch (error) {
      setStatus(
        error.message === "Failed to fetch"
          ? "Cannot connect to the backend. Check VITE_API_URL on Render and make sure the backend is running."
          : error.message || "Unable to send message right now."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="page-hero contact-hero">
        <div>
          <p className="eyebrow">Contact us</p>
          <h1>Let us prepare your perfect stay.</h1>
          <p>Ask about rooms, events, airport pickup, dining, or special arrangements.</p>
        </div>
      </section>

      <section className="section contact-layout">
        <div className="contact-info">
          <h2>Luxury Hotel</h2>
          <p>
            Our guest relations team is available every day for reservations, travel help, and custom requests.
          </p>
          <div className="contact-list">
            <span><MapPin /> 21 Royal Avenue, City Center</span>
            <span><Phone /> +91 98765 43210</span>
            <span><Mail /> hello@luxuryhotel.com</span>
          </div>
          <div className="map-panel">
            <strong>Visit Us</strong>
            <span>City Center · Near business district · 15 minutes from airport</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Subject
            <input name="subject" value={form.subject} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" value={form.message} onChange={handleChange} rows="6" required />
          </label>
          <button className="button primary full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </section>
    </>
  );
}

export default Contact;
