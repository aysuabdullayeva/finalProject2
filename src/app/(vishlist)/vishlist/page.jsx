"use client";
import React, { useEffect, useState } from "react";
import { FcGlobe } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaHeartBroken } from "react-icons/fa";
import Link from "next/link";

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
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-12">
        My Wishlist
      </h1>

      {vishlist.length === 0 ? (
        <div className="flex flex-col justify-center items-center text-gray-400">
          <FaHeartBroken className="text-7xl mb-4 animate-pulse" />
          <p className="text-2xl font-semibold text-gray-600">
            Your wishlist is empty
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 px-6">
          {vishlist.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="bg-red-500 h-[350px] relative bg-white rounded-2xl shadow-xl w-64 sm:w-72 md:w-80 lg:w-96 transition-transform transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
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

              <div className="p-4 space-y-2">
                <div className="flex items-center m-3 gap-2">
                  <FcGlobe className="text-2xl" />
                  <h3 className="text-md font-semibold text-gray-800 truncate">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center m-3 gap-2 text-gray-500">
                  <RiCalendarScheduleLine className="text-lg" />
                  <span className="text-sm">{item.date}</span>
                </div>

                <div className="m-3 flex justify-center">
                  <Link href={`/travel/${item.id}`}>
                    <button className=" p-2 px-3 bg-orange-500 text-white rounded-full text-sm font-medium shadow hover:bg-orange-600 transition">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Vishlist;
