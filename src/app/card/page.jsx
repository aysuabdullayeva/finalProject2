"use client";
import { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
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
    <div>
      <h1 className="font-bold text-3xl text-center !m-5">Booking Page</h1>
      {card.length === 0 ? (
        <div className="flex justify-center items-center">
          <FaHeartBroken className="text-6xl text-gray-400 !m-5" />
          <p>Booking list is empty</p>
        </div>
      ) : (
        card.map((item, index) => (
          <div
            className="w-[300px] h-[400px] relative !m-auto"
            key={`${item.id}-${index}`}
            style={{ marginBottom: "20px" }}
          >
            <MdCancel
              className="absolute top-[10] right-[10] text-xl cursor-pointer duration-500 hover:text-red-600 hover:text-2xl"
              onClick={() => removeItem(item.id)}
            />
            <img
              className="w-[300px] h-[300px] object-cover"
              src={item.image}
              alt={item.title}
            />
            <div className="names flex justify-center items-center gap-3 !m-3">
              <FcGlobe />
              <h3 className="text-sm">{item.title}</h3>
            </div>
            <div className="dates flex justify-center items-center gap-3 !m-3">
              <RiCalendarScheduleLine />{" "}
              <span className="text-sm">{item.date}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
