"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./carouselApp.css";

export default function CarouselBackground({ openModal }) {
  const clients = [
    {
      name: "Jessica Alba",
      img: "https://themes.webswaala.com/CMS/WW80/wp-content/uploads/2024/08/testimonial-img-05.png",
      rating: 5,
      badge: "Premium Traveller",
      details:
        "My travel journey was absolutely breathtaking! The service was exceptional and every moment felt magical.",
    },
    {
      name: "Michael Brown",
      img: "https://themes.webswaala.com/CMS/WW80/wp-content/uploads/2024/08/testimonial-img-06.png",
      rating: 4,
      badge: "Trusted Explorer",
      details:
        "A smooth and unforgettable trip! Everything was organized perfectly.",
    },
    {
      name: "Sarah Smith",
      img: "https://themes.webswaala.com/CMS/WW80/wp-content/uploads/2024/08/testimonial-img-04.png",
      rating: 5,
      badge: "Gold Member",
      details:
        "One of the best travel experiences of my life! I felt safe and inspired.",
    },
    {
      name: "Emily Carter",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      rating: 5,
      badge: "Premium Traveller",
      details:
        "Amazing experience! Everything was perfectly handled. Highly recommended.",
    },
    {
      name: "David Wilson",
      img: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
      rating: 4,
      badge: "Verified Explorer",
      details:
        "The trip was smooth and comfortable. Would definitely book again.",
    },
    {
      name: "Anna Johnson",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      rating: 5,
      badge: "Gold Member",
      details: "Incredible destinations and great service!",
    },
    {
      name: "James Miller",
      img: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg",
      rating: 4,
      badge: "Traveller",
      details: "A very enjoyable and memorable journey.",
    },
  ];

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
 
    breakpoints: {
    "(max-width: 1024px)": {
      slides: { perView: 2, spacing: 15 },
    },
    "(max-width: 768px)": {
      slides: { perView: 1, spacing: 15 },
    },

  },
  });

  return (
    <div className="carousel-container">
      <div ref={sliderRef} className="keen-slider">
        {clients.map((c, i) => (
          <div key={i} className="keen-slider__slide client-card">
            <img src={c.img} alt={c.name} />
            <h3>{c.name}</h3>

            <button
              onClick={() => openModal(c)}
              className="experience-btn "
            >
              About my experiences
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
