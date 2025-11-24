import CntryCrs from "@/Component/CountriesCarousel/CntryCrs";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="blogTitle">
        <h1 className="text-center font-bold text-[30px] !m-3">
          🌍 Travel Blog — Your Daily Dose of Adventures & Travel Inspiration
        </h1>
      </div>

      <div className="blogContainer">
        <CntryCrs />
      </div>
    </div>
  );
};

export default page;