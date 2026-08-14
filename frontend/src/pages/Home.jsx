import { CalendarDays, CheckCircle2, ConciergeBell, Star, Wifi } from "lucide-react";
import React, { useState } from "react";

const apiUrl = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");

const initialBooking = {
  fullName: "",
  email: "",
  phone: "",
  roomType: "Deluxe Suite",
  checkIn: "",
  checkOut: "",
  guests: 2
};

const rooms = [
  {
    title: "Deluxe Suite",
    price: "₹9,500",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
    text: "A spacious suite with plush bedding, a lounge corner, and skyline views."
  },
  {
    title: "Royal Room",
    price: "₹13,800",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    text: "Premium comfort with marble bath finishes and a private breakfast service."
  },
  {
    title: "Presidential Villa",
    price: "₹28,000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    text: "A signature private stay with a terrace, dining room, and personal concierge."
  }
];

function Home() {
  const [booking, setBooking] = useState(initialBooking);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBooking((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    if (new Date(booking.checkOut) <= new Date(booking.checkIn)) {
      setStatus("Check out date must be after check in date.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Booking failed");
      }

      setStatus("Your booking request has been received. Our team will contact you shortly.");
      setBooking(initialBooking);
    } catch (error) {
      setStatus(
        error.message === "Failed to fetch"
          ? "Cannot connect to the backend. Check VITE_API_URL on Render and make sure the backend is running."
          : error.message || "Unable to send booking request right now."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Five-star comfort in the heart of the city</p>
          <h1>Luxury Hotel</h1>
          <p className="hero-copy">
            Wake up to elegant rooms, peaceful service, and refined dining designed for business trips, family holidays,
            and unforgettable celebrations.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#booking">Book a Stay</a>
            <a className="button ghost" href="/gallery">View Gallery</a>
          </div>
        </div>

        <form className="booking-panel" id="booking" onSubmit={handleSubmit}>
          <div className="panel-title">
            <CalendarDays />
            <div>
              <h2>Reserve Your Room</h2>
              <p>Fast booking request</p>
            </div>
          </div>
          <div className="form-grid">
            <label>
              Full Name
              <input name="fullName" value={booking.fullName} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input type="email" name="email" value={booking.email} onChange={handleChange} required />
            </label>
            <label>
              Phone
              <input name="phone" value={booking.phone} onChange={handleChange} required />
            </label>
            <label>
              Room Type
              <select name="roomType" value={booking.roomType} onChange={handleChange}>
                <option>Deluxe Suite</option>
                <option>Royal Room</option>
                <option>Presidential Villa</option>
              </select>
            </label>
            <label>
              Check In
              <input type="date" name="checkIn" value={booking.checkIn} onChange={handleChange} required />
            </label>
            <label>
              Check Out
              <input
                type="date"
                name="checkOut"
                value={booking.checkOut}
                min={booking.checkIn || undefined}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Guests
              <input type="number" min="1" name="guests" value={booking.guests} onChange={handleChange} required />
            </label>
          </div>
          <button className="button primary full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Booking Request"}
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </section>

      <section className="section stats-band">
        <div>
          <strong>4.9/5</strong>
          <span>Guest rating</span>
        </div>
        <div>
          <strong>120+</strong>
          <span>Luxury rooms</span>
        </div>
        <div>
          <strong>24/7</strong>
          <span>Concierge</span>
        </div>
        <div>
          <strong>15 min</strong>
          <span>From airport</span>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Why guests love us</p>
          <h2>Every detail is designed for comfort.</h2>
          <p>
            From quiet rooms and crisp service to chef-led dining and wellness spaces, Luxury Hotel gives every guest a
            smooth stay from arrival to checkout.
          </p>
          <div className="feature-list">
            <span><CheckCircle2 /> Smart check-in and checkout</span>
            <span><Wifi /> High-speed Wi-Fi in every room</span>
            <span><ConciergeBell /> Personal concierge assistance</span>
            <span><Star /> Premium dining and lounge access</span>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
          alt="Luxury hotel pool and exterior"
        />
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Rooms & suites</p>
          <h2>Choose your perfect stay.</h2>
        </div>
        <div className="card-grid">
          {rooms.map((room) => (
            <article className="room-card" key={room.title}>
              <img src={room.image} alt={room.title} />
              <div>
                <span className="price">{room.price} / night</span>
                <h3>{room.title}</h3>
                <p>{room.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
