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
  // home search form
  const [openModal, setOpenModal] = useState(false);
  const [openActive, setOpenActive] = useState(false);
  const [openDay, setOpenDay] = useState(false);
  const [openTraveller, setOpenTraveller] = useState(false);

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };
  const toggleActive = () => {
    setOpenActive((prev) => !prev);
  };

  const toggleOpen = () => {
    setOpenDay((prev) => !prev);
  };

  const toggleTraveller = () => {
    setOpenTraveller((prev) => !prev);
  };

  return (
    <section>
      <div className="homeDiv">
        <div className="homeText">
          <h2>Take the Scenic Route</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea
            adipisci ex dolor voluptate eius sit! Natus in, ab voluptates,
            maxime non tenetur corporis sequi, doloremque fugit expedita
            distinctio et.
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
            <SwiperSlide>
              <div className="slideBox">
                <img
                  src="https://i.pinimg.com/1200x/63/b5/01/63b501613f667796c3f70ce176a2d874.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slideBox">
                <img
                  src="https://i.pinimg.com/1200x/be/45/e3/be45e368aa6d389f7ae6d6c467e268fd.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slideBox">
                <img
                  src="https://i.pinimg.com/1200x/3d/43/94/3d4394e16eb27eef2c0441ea837d91e2.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slideBox">
                <img
                  src="https://i.pinimg.com/1200x/3a/24/cd/3a24cdf489959d461b751f03fbc6f30e.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideBox">
                <img
                  src="https://i.pinimg.com/736x/36/04/7f/36047f6907a89044b3641a69f268feda.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <form className="homeForm" action="">
        <div className="inp">
          <input className="homeInput" type="text" />
        </div>

        <div className="buttonDiv">
          <div>
            <button type="button" className="homeBtn flex items-center gap-2">
              Location <FaCaretDown onClick={toggleModal} />
            </button>
            {openModal && (
              <div className="buttonModal">
                <button type="button">Paris</button>
                <button>London</button>
                <button>Paris</button>
              </div>
            )}
          </div>

          <div className="relative">
            <button type="button" className="homeBtn flex items-center gap-2">
              Activity Type <FaCaretDown onClick={toggleActive} />
            </button>
            {openActive && (
              <div className="buttonModal">
                <button>Paris</button>
                <button>London</button>
                <button>Paris</button>
              </div>
            )}
          </div>

          <div className="relative">
            <button type="button" className="homeBtn flex items-center gap-2">
              Activity Day <FaCaretDown onClick={toggleOpen} />
            </button>
            {openDay && (
              <div className="buttonModal">
                <button>Paris</button>
                <button>London</button>
                <button>Paris</button>
              </div>
            )}
          </div>

          <div className="relative">
            <button type="button" className="homeBtn flex items-center gap-2">
              Traveller <FaCaretDown onClick={toggleTraveller} />
            </button>
            {openTraveller && (
              <div className="buttonModal">
                <button>Paris</button>
                <button>London</button>
                <button>Paris</button>
              </div>
            )}
          </div>

          <button className="srchBtn w-[100px] bg-orange-500 rounded-3xl !p-2 text-white cursor-pointer">
            Search
          </button>
        </div>
      </form>
    </section>
  );
}
