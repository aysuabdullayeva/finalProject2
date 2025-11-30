"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import axios from "axios";
import "./searchModal.css";
import Link from "next/link";

const SearchModal = ({ isOpen, onClose }) => {
  const [placeholder, setPlaceholder] = useState("Enter a product name");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          "https://691c726e3aaeed735c90e303.mockapi.io/persondata"
        );
        setData(result.data);
       
        
      } catch (error) {
        console.log(error);
      }
    };
    getData();
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
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="general p-5 rounded-lg w-[80%] relative">
        <button
          onClick={onClose}
          className="absolute top-7 right-7 text-white hover:text-black"
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

        <div className="boxes !w-[1100px] m-auto">
          {result.length > 0 ? (
            result.map((item) => (
              <div
                key={item.id}
                className=" text-sm hover:bg-gray-100 cursor-pointer"
              >
                <div className="boxesCard">
                  <img src={item?.image} alt="" />
                  <div className="boxDatas">
                    <div className="itemName">{item?.name}</div>
                    <div className="itemTitle">{item?.title}</div>
                    <div className="itemPrice">{item?.price}</div>
                  </div>
                  <Link  href={`/search/${item.id}`}>
                    <button type="button" className="learnMoreBtn" onClick={onClose}>
                      Learn More...
                    </button>
                  </Link>
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