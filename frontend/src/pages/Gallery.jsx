import React from "react";
const gallery = [
  {
    title: "Poolside Calm",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Grand Suite",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Lobby Lounge",
    image: "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Fine Dining",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Wellness Spa",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Night Exterior",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
  }
];

function Gallery() {
  return (
    <>
      <section className="page-hero gallery-hero">
        <div>
          <p className="eyebrow">Gallery</p>
          <h1>See the spaces that shape your stay.</h1>
          <p>Explore rooms, dining, spa, pool, and lounge moments from Luxury Hotel.</p>
        </div>
      </section>

      <section className="section gallery-grid">
        {gallery.map((item, index) => (
          <article className={index === 0 || index === 5 ? "gallery-item wide" : "gallery-item"} key={item.title}>
            <img src={item.image} alt={item.title} />
            <div>{item.title}</div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Gallery;
