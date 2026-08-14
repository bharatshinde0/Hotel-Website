import React from "react";
import { Car, Dumbbell, Martini, ShieldCheck, Sparkles, Utensils } from "lucide-react";

const services = [
  {
    icon: <Utensils />,
    title: "Fine Dining",
    text: "Seasonal menus, private dining, breakfast buffet, and chef-curated tasting experiences."
  },
  {
    icon: <Sparkles />,
    title: "Spa & Wellness",
    text: "Massage therapies, sauna, steam rooms, and calm wellness rituals after a long day."
  },
  {
    icon: <Car />,
    title: "Airport Transfers",
    text: "Comfortable pickup and drop service with professional drivers and luxury vehicles."
  },
  {
    icon: <Dumbbell />,
    title: "Fitness Studio",
    text: "Modern equipment, personal training sessions, and open access for hotel guests."
  },
  {
    icon: <Martini />,
    title: "Sky Lounge",
    text: "Signature drinks, live evenings, premium mocktails, and private celebrations."
  },
  {
    icon: <ShieldCheck />,
    title: "Secure Stay",
    text: "24-hour security, digital access, safe parking, and attentive guest support."
  }
];

function Services() {
  return (
    <>
      <section className="page-hero services-hero">
        <div>
          <p className="eyebrow">Our services</p>
          <h1>Comfort, care, and everything in between.</h1>
          <p>
            Luxury Hotel brings together thoughtful service, beautiful spaces, and practical support so every visit feels
            effortless.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon">{service.icon}</span>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split reverse">
        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
          alt="Elegant hotel lobby"
        />
        <div>
          <p className="eyebrow">Guest experience</p>
          <h2>Premium hospitality without friction.</h2>
          <p>
            Our team helps with travel planning, dining reservations, local experiences, events, and special room
            arrangements before you arrive.
          </p>
          <a className="button primary" href="/contact">Plan Your Visit</a>
        </div>
      </section>
    </>
  );
}

export default Services;
