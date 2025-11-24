"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import axios from "axios";
import "./searchModal.css";
import Link from "next/link";

const SearchModal = ({ isOpen, onClose }) => {
  const [placeholder, setPlaceholder] = useState("Enter a product name");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://691c726e3aaeed735c90e303.mockapi.io/persondata")
      .then((res) => setData(res.data));
  }, []);

  const result = data.filter((item) =>
    item?.name?.toLowerCase().includes(search.toLowerCase())
  );

  if (!isOpen) return null;

  const animatePlaceholder = () => {
    const text = "Your next adventure starts here...";
    setPlaceholder("");
    text.split("").forEach((char, i) => {
      setTimeout(() => {
        setPlaceholder((prev) => prev + char);
      }, i * 80);
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="general bg-white p-4 rounded-lg w-[50%] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={24} />
        </button>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setPlaceholder("")}
          onBlur={animatePlaceholder}
          className="w-full !px-2 !py-2 outline-none border rounded"
        />

        <div className="boxes">
          {result.length > 0 ? (
            result.map((item) => (
              <div
                key={item.id}
                className=" p-2 border-b text-sm hover:bg-gray-100 cursor-pointer"
              >

                <div className="allBoxes">
                  <div className="boxesCard">
                    <img src={item?.image} alt="" />
                    {item?.name}
                    {item?.title}
                    {item?.price}
                    <Link href={`/search/${item.id}`}>
                      <button className="!p-3 cursor-pointer text-white bg-black !m-3 rounded-3xl duration-500 hover:bg-white hover:text-black hover:border-[1px]">
                        Learn More...
                      </button>
                    </Link>
                  </div>
                </div>


              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
