"use client";
import { useEffect, useState } from "react";
import { FaSortAmountUpAlt } from "react-icons/fa";

export default function Scroll() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scroll}
        className="fixed z-[99] cursor-pointer bottom-6 right-3 bg-blue-600 text-white !p-2 rounded-full shadow-lg hover:bg-blue-700 transition-transform hover:scale-110"
      >
        <FaSortAmountUpAlt size={20} />
      </button>
    )
  );
}
