"use client";
import React, { useState } from "react";
import "./ourClient.css";
import CarouselApp from "@/Component/ClientsCarousel/CarouselApp";
import BookBtn from "@/Component/BookBtn/BookBtn";
import NewClientCarousel from "@/Component/NewClientCarousel/NewClientCarousel";

const OurClient = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (item) => {
    setSelected(item);
    setOpen(true);
  };

  return (
    <section className="!mb-50">
      <div className="clientContainer w-[95%] !m-auto ">
        <div className="clientHeader">
          <div className="contentandButtonHeader flex items-center">
            <div className="topClient flex w-[500px] !m-auto">
              <span
                style={{
                  fontSize: "70px",
                  paddingRight: "10px",
                  color: "orange",
                  opacity: "0.7",
                }}
              >
                &#10077;
              </span>
              <h2 className="highlight font-bold text-[45px] !pt-5 text-center">
                What our clients say
              </h2>
              <span
                style={{
                  fontSize: "70px",
                  paddingLeft: "10px",
                  color: "orange",
                  opacity: "0.7",
                }}
              >
                &#10078;
              </span>
            </div>
          </div>

          <div className="contentClient flex justify-center items-center gap-[180px] !mb-10">
            <div className="mySpan w-[73%] text-end">
              <span className="text-[20px] text-end !pb-8 ">
                Travel is the movement of people between distant locations.
                Travel can be done by boat.
              </span>
            </div>
            <BookBtn />
          </div>
        </div>

        <div className="clientContent">
          <div className="movement flex justify-between !mb-20 !mt-20">
            <img
              className="plane-left"
              src="https://template.themewold.com/WordPress/CMS/Demo12/wp-content/uploads/2025/05/about-bg-1.png"
              alt=""
            />

            <CarouselApp openModal={openModal} />
            <img
              className="plane-right"
              src="https://template.themewold.com/WordPress/CMS/Demo12/wp-content/uploads/2025/05/about-bg-2.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <NewClientCarousel
        isOpen={open}
        onClose={() => setOpen(false)}
        experience={selected}
      />
    </section>
  );
};

export default OurClient;