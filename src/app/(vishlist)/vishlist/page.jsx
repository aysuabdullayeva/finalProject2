"use client";
import React, { useEffect, useState } from "react";
import { FcGlobe } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaHeartBroken } from "react-icons/fa";

const Vishlist = () => {
  const [vishlist, setVishlist] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("vishlist")) || [];
    setVishlist(list); 
    setWishlistCount(list.length);
  }, []);

  useEffect(() => {
    const updateAll = () => {
      const list = JSON.parse(localStorage.getItem("vishlist")) || [];
      setWishlistCount(list.length);
      setVishlist(list);
    };

    window.addEventListener("wishlistChanged", updateAll);
    return () => window.removeEventListener("wishlistChanged", updateAll);
  }, []);

  const removeItem = (id) => {
    const updateItem = vishlist.filter((item) => item.id !== id);
    setVishlist(updateItem);
    localStorage.setItem("vishlist", JSON.stringify(updateItem));
    window.dispatchEvent(new Event("wishlistChanged"));
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center !m-5">Vishlist Page</h1>
      {vishlist.length === 0 ? (
        <div className="flex justify-center items-center">
          <FaHeartBroken className="text-6xl text-gray-400 !m-5" />
          <p className="text-3xl">Vishlist is empty</p>
        </div>
      ) : (
        vishlist.map((item, index) => (
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

export default Vishlist;
