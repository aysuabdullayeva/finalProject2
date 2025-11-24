"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import "./header.css";
import SearchModal from "../SearchModal/SearchModal";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const Header = () => {
  // redux login
  // const router = useRouter();
  // const [person, setPerson] = useState("");

  // const controlUser = () => {
  //   let user = JSON.parse(localStorage.getItem("user")) || [];
  //   console.log(user);

  //   if (user.length == 0) {
  //     router.push("/login");
  //   } else {
  //     setPerson(user);
  //     console.log(user);
  //   }
  // };

  // useEffect(() => {
  //   controlUser();
  // }, []);

  // const ExitAccount = () => {
  //   localStorage.removeItem("user");
  //   controlUser();
  //   setPerson("")
  // };

  // header absolute
  const pathname = usePathname();
  const noAbsolute = [
    "/login",
    "/register",
    "/blog",
    "/about",
    "/contact",
    "/vishlist",
    "/card",
    "FormRegister",
  ];
  const headerClass = noAbsolute.includes(pathname)
    ? "relative"
    : "absolute top-0 left-0 w-full";
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // wishlist count ucun
  const [wishlistCount, setWishlistCount] = useState(0);
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("vishlist")) || [];
    setWishlistCount(list.length);
  }, []);
  useEffect(() => {
    const updateCount = () => {
      const list = JSON.parse(localStorage.getItem("vishlist")) || [];
      setWishlistCount(list.length);
    };
    updateCount();
    window.addEventListener("wishlistChanged", updateCount);
    return () => window.removeEventListener("wishlistChanged", updateCount);
  }, []);

  // add to card ucun
  const [cardCount, setCardCount] = useState(0);
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("card")) || [];
    setCardCount(list.length);
  }, []);
  useEffect(() => {
    const updateCount = () => {
      const list = JSON.parse(localStorage.getItem("card")) || [];
      setCardCount(list.length);
    };
    window.addEventListener("cardChanged", updateCount);
    return () => window.removeEventListener("cardChanged", updateCount);
  }, []);

  return (
    <header className={headerClass}>
      <div className="headerContainer">
        <div className="headerLogo">
          <Link href={"/"}>
            <Image
              src="/HeaderLogo/logo.jpeg"
              alt="Website logo"
              width={150}
              height={50}
            />
          </Link>
          {/* redux login */}
          {/* {person ? (
            <h3 className="text-yellow-400 text-2xl">{person.name}</h3>
          ) : null} */}
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            {/* redux login */}
            {/* {
  person ? 
       (       <li>
              <button onClick={ExitAccount} className="text-red-700 font-bold cursor-pointer hover:text-amber-300 hover:bg-red-700 bg-white !px-3 rounded-2xl">
                Exit
              </button>
            </li> ): null
} */}
          </ul>
        </nav>

        <div className="rightHeader flex justify-between items-center !w-[350px]">
          {/* Modal bax */}
          <div
            className="search cursor-pointer hover:text-blue-600 transition"
            onClick={() => setIsModalOpen(true)}
          >
            <FaSearch />
          </div>

          <div className="wishlist">
            <Link href="/vishlist">
              <FaHeart />
              <span className="count absolute top-[-5px] right-[-5px] bg-red-500 text-white text-xs rounded-full px-[6px]">
                {wishlistCount}
              </span>
              {/* <span className="count">{wishlistCount}</span> */}
            </Link>
          </div>

          <div className="addtocard">
            <Link href={"/card"}>
              <FaBagShopping />
              <span className="count">{cardCount}</span>
            </Link>
          </div>

          {/* <div className="logReg">
            <div className="logReg">
              <RiAccountCircleFill />
            </div>
            <div className="logout">
              <LuLogOut />
            </div>
          </div> */}

          <div className="loginRegister flex">
            <Link href="/register">
              <button className="!ml-4 text-[17px] cursor-pointer bg-white text-black rounded-[20px] !pl-4 !pr-4 !p-2 duration-500 ease-out transition-[0.5s] hover:opacity-[0.8]">
                Sign Up
              </button>
            </Link>

            <Link href="/login">
              <button className="!ml-4 text-[17px] cursor-pointer bg-black text-white rounded-[20px] !pl-4 !pr-4 !p-2 duration-500 ease-out transition-[0.5s] hover:opacity-[0.8]">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal pəncərə komponenti bax */}
      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;
