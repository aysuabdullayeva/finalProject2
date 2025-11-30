"use client";
import { useEffect, useState } from "react";
import { FaHeartBroken } from "react-icons/fa";
import { FcGlobe } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";

const Card = () => {
  const [card, setCard] = useState([]);
  const [cardCount, setCardCount] = useState(0);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("card")) || [];
    setCard(list);
    setCardCount(list.length);
  }, []);

  useEffect(() => {
    const updateAll = () => {
      const list = JSON.parse(localStorage.getItem("card")) || [];
      setCardCount(list.length);
      setCard(list);
    };

    window.addEventListener("cardChanged", updateAll);
    return () => window.removeEventListener("cardChanged", updateAll);
  }, []);

  const removeItem = (id) => {
    const updateItem = card.filter((item) => item.id !== id);
    setCard(updateItem);
    localStorage.setItem("card", JSON.stringify(updateItem));
    window.dispatchEvent(new Event("cardChanged"));
  };

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-12">
        Booking Page
      </h1>
      {card.length === 0 ? (
        <div className="flex flex-col justify-center items-center text-gray-400">
          <FaHeartBroken className="text-7xl mb-4 animate-pulse" />
          <p className="text-2xl font-semibold text-gray-600">
            Your booking list is empty
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 px-6">
          {card.map((item, index) => (
            <div
              className="h-[380px] relative bg-white rounded-2xl shadow-xl w-64 sm:w-72 md:w-80 lg:w-96 transition-transform transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
              key={`${item.id}-${index}`}
            >
              <button
                className="absolute top-3 right-3  rounded-full p-1 shadow hover:text-white transition hover:duration-900 ease in"
                onClick={() => removeItem(item.id)}
              >
                <MdCancel className="text-3xl" />
              </button>
              <img
                src={item.image}
                alt={item.title}
                className="w-full !h-[200px] object-cover"
              />

              <div className=" p-4 space-y-2">
                <div className="flex items-center m-3 gap-2">
                  <FcGlobe className="text-2xl mr-2" />
                  <h3 className="text-md font-semibold text-gray-800 truncate">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center m-3 gap-2 text-gray-500">
                <RiCalendarScheduleLine className="text-lg mr-3 ml-2" />
                <span className="text-sm">{item.date}</span>
              </div>

              <div className="m-3 flex justify-center">
                <button className="p-2 px-3 bg-orange-500 text-white rounded-full text-sm font-medium shadow hover:bg-orange-600 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
