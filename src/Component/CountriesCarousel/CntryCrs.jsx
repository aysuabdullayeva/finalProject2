"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./crs.css";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import axios from "axios";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FcGlobe } from "react-icons/fc";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";

export default function CntryCrs() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://691224d952a60f10c820c600.mockapi.io/AboutCarousel"
        );
        setNews(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // wishliste elave etmek ve countu deyismek
  const addToVishlist = (item) => {
    const vishlist = JSON.parse(localStorage.getItem("vishlist")) || [];
    const exist = vishlist.find((p) => p.id === item.id);
    if (exist) {
      alert("Oops! This package has already claimed a spot in your wishlist!");
      return;
    }
    vishlist.push(item);
    localStorage.setItem("vishlist", JSON.stringify(vishlist));
    window.dispatchEvent(new Event("wishlistChanged"));
    alert("Success! You've added this package to your wishlist!");
  };

  // carda elave etmek ve countu deyismek
  const addToCard = (item) => {
    const card = JSON.parse(localStorage.getItem("card")) || [];
    const exist = card.find((p) => p.id === item.id);
    if (exist) {
      alert("You’ve already saved this gem! No need to duplicate!");
      return;
    }
    card.push(item);
    localStorage.setItem("card", JSON.stringify(card));
    window.dispatchEvent(new Event("cardChanged"));
    alert("Nice choice! This package is safely tucked away for later!");
  };

  return (
    <div className="cntrycrs">
      <Swiper
        key={news.length}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        observer={true}
        observeParents={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {news.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="news-card">
              <FaHeart onClick={() => addToVishlist(item)} className="heart" />
              <FaBookmark onClick={() => addToCard(item)} className="card" />
              <img src={item.image} alt={item.title} />
              <div className="names flex justify-center items-center gap-3 !m-3">
                <FcGlobe />
                <h3>{item.title}</h3>
              </div>
              <div className="dates flex justify-center items-center gap-3 !m-3">
                <RiCalendarScheduleLine /> <span>{item.date}</span>
              </div>
              <Link href={`/travel/${item.id}`}>
                <button className="text-orange-500 text-underline">
                  Read More...
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}