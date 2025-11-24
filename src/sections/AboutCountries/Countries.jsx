"use client";
import BookBtn from "@/Component/BookBtn/BookBtn";
import CntryCrs from "@/Component/CountriesCarousel/CntryCrs";
import React from "react";
import "./countries.css"

const Countries = () => {
  return (
    <section>
      <div className="countriesContainer w-[95%] !m-auto">
        <div className="countriesHeader">
          <div className="countryHeader flex items-center">
            <h2 className="highlight font-bold text-[45px] !pt-5 text-center">
              News & Article
            </h2>
          </div>

          <div className="contentCntry !mt-5">
            <div className="spanDiv">
              <span className="text-[20px]">
                Travel is the movement of people between distant locations.
                Travel can be done boat.
              </span>
            </div>

            <div className="bookButton">
              <BookBtn />
            </div>
          </div>

        </div>
        <CntryCrs />
      </div>
    </section>
  );
};

export default Countries;
