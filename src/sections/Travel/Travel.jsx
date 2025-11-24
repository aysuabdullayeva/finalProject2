"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import "./travel.css";
import BookBtn from "@/Component/BookBtn/BookBtn";

const CountUpBox = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let current = 0;
    const duration = 1500;
    const steps = 60;

    const displayEnd = end >= 1000 ? Math.floor(end / 1000) : end;
    const stepIncrement = 1;
    const stepTime = duration / displayEnd;

    const timer = setInterval(() => {
      current += stepIncrement;
      if (current >= displayEnd) current = displayEnd;

      setCount(current);

      if (current >= displayEnd) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <h3 ref={ref} className="font-bold text-[40px]">
      {end >= 1000 ? `${count}K` : count}
      {suffix && end < 1000 ? suffix : "+"}
    </h3>
  );
};

const Travel = () => {
  return (
    <section className="mysection">
      <div className="travelSectionContainer">
        <div className="travelHeader flex items-center !m-auto w-[85%]">
          <h2 className="highlight text-center text-[40px] font-bold">
            Travel Highlights & Stats
          </h2>
        </div>
        <div className=" w-[92%] text-end !mb-10">
          {" "}
          <BookBtn />
        </div>

        <div className="boxesContainer">
          <div className="topBoxes flex w-[90%] justify-evenly">
            <div className="box bg-[#F3F8F6] flex flex-col justify-center items-center ">
              <CountUpBox end={10} suffix="+" />
              <span>Years Experience</span>
            </div>
            <div className="box">
              <Image
                src={"/Travel/travel.jpg"}
                alt="Years experience"
                width={300}
                height={250}
                className="stat-image"
              />
            </div>
            <div className="box bg-[#F3F8F6] flex flex-col justify-center items-center">
              <CountUpBox end={9000} suffix="K+" />
              <span>Tours Completed</span>
            </div>
            <div className="box">
              <Image
                src={"/Travel/italy.jpg"}
                alt="Years experience"
                width={300}
                height={250}
                className="stat-image"
              />
            </div>
          </div>
          <div className="bottomBoxes flex w-[90%] justify-evenly">
            <div className="box">
              <Image
                src={"/Travel/colmar.jpg"}
                alt="Years experience"
                width={300}
                height={250}
                className="stat-image"
              />
            </div>
            <div className="box bg-[#F3F8F6] flex flex-col justify-center items-center ">
              <CountUpBox end={98} suffix="+" />
              <span>Retention rate</span>
            </div>
            <div className="box">
              <Image
                src={"/Travel/bali.jpg"}
                alt="Years experience"
                width={300}
                height={250}
                className="stat-image"
              />
            </div>
            <div className="box bg-[#F3F8F6] flex flex-col justify-center items-center">
              <CountUpBox end={20000} suffix="K+" />
              <span>Happy travelers</span>
            </div>
          </div>
        </div>

        {/* <img
          className="moving-bg h-[150px]"
          src="https://themes.webswaala.com/CMS/WW80/wp-content/uploads/2024/08/backgrond-img.png"
          alt=""
        />
        <img
          className="moving-bg h-[150px]"
          src="https://themes.webswaala.com/CMS/WW80/wp-content/uploads/2024/08/backgrond-img.png"
          alt=""
        /> */}
      </div>
    </section>
  );
};

export default Travel;
