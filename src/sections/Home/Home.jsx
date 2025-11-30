"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import "./home.css";
import { FaCaretDown } from "react-icons/fa";

export default function Section() {
  const [openModal, setOpenModal] = useState(false);
  const [openActive, setOpenActive] = useState(false);
  const [openDay, setOpenDay] = useState(false);
  const [openTraveller, setOpenTraveller] = useState(false);

  const [location, setLocation] = useState("");
  const [activity, setActivity] = useState("");
  const [day, setDay] = useState("");
  const [traveller, setTraveller] = useState("");

  const toggleModal = () => setOpenModal((prev) => !prev);
  const toggleActive = () => setOpenActive((prev) => !prev);
  const toggleOpen = () => setOpenDay((prev) => !prev);
  const toggleTraveller = () => setOpenTraveller((prev) => !prev);

  // bax
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { location, activity, day, traveller };
    localStorage.setItem("travelSearch", JSON.stringify(data));
    alert("Thank You. Form submitted successfully !");
  };

  return (
    <section>
      <div className="homeDiv">
        <div className="homeText">
          <h2>Take the Scenic Route</h2>
          <p>
            The world is full of magic for those who wander. Explore
            breathtaking landscapes, taste new cultures, and collect moments
            that become memories. Start your journey with us and see the beauty
            waiting beyond the horizon.
          </p>
        </div>

        <div className="carouselDiv">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {[
              "https://i.pinimg.com/1200x/63/b5/01/63b501613f667796c3f70ce176a2d874.jpg",
              "https://i.pinimg.com/1200x/be/45/e3/be45e368aa6d389f7ae6d6c467e268fd.jpg",
              "https://i.pinimg.com/1200x/3d/43/94/3d4394e16eb27eef2c0441ea837d91e2.jpg",
              "https://i.pinimg.com/1200x/3a/24/cd/3a24cdf489959d461b751f03fbc6f30e.jpg",
              "https://i.pinimg.com/736x/36/04/7f/36047f6907a89044b3641a69f268feda.jpg",
            ].map((src, i) => (
              <SwiperSlide key={i}>
                <div className="slideBox">
                  <img src={src} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <form className="homeForm relative" onSubmit={handleSubmit}>
        <div className="buttonDiv flex items-center gap-6">
          <div className="relative">
            <button
              onClick={toggleModal}
              type="button"
              className="homeBtn flex items-center gap-2"
            >
              {location || "Location"} <FaCaretDown />
            </button>

            {openModal && (
              <div className="buttonModal">
                {["Hamburg", "Bali", "New York", "Colmar"].map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setLocation(item);
                        setOpenModal(false);
                      }}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={toggleActive}
              type="button"
              className="homeBtn flex items-center gap-2"
            >
              {activity || "Activity Type"} <FaCaretDown />
            </button>

            {openActive && (
              <div className="buttonModal">
                {[
                  "Fishing",
                  "Swimming",
                  "Road Cycling",
                  "Snowboarding",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setActivity(item);
                      setOpenActive(false);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={toggleOpen}
              type="button"
              className="homeBtn flex items-center gap-2"
            >
              {day || "Activity Day"} <FaCaretDown />
            </button>

            {openDay && (
              <div className="buttonModal">
                {["3 Days", "7 Days",  "15 Days", "30 Days"].map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setDay(item);
                        setOpenDay(false);
                      }}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={toggleTraveller}
              type="button"
              className="homeBtn flex items-center gap-2"
            >
              {traveller || "Traveller"} <FaCaretDown />
            </button>

            {openTraveller && (
              <div className="buttonModal">
                {[
                  "Tourist",
                  "Visitor",
                  "Backpacker",
                  "Solo traveler",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setTraveller(item);
                      setOpenTraveller(false);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="srchBtn w-[100px] bg-orange-500 rounded-3xl !p-2 text-white cursor-pointer"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}
