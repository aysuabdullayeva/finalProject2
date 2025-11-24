import Image from "next/image";
import React from "react";
import "./footer.css";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="firstFooter flex w-[90%] justify-between ">
        <Link href={"/"}>
          <Image
            src="/HeaderLogo/logo.jpeg"
            alt="Website logo"
            width={150}
            height={50}
          />
        </Link>
        <div className="footerIcons">
          <h4 className="font-semibold text-[18px] !p-3">
            Find Us In Social Media
          </h4>
          <div className="icons flex gap-6 text-xl ">
            <FaInstagramSquare />
            <FaTwitter />
            <FaYoutube />
            <FaFacebook />
            <FaLinkedin />
          </div>
        </div>
        <div className="footerNewsletter">
          <h2 className="font-semibold text-[17px]">Newsletter</h2>
          <form className="relative" action="">
            <input
              className="!w-[350px] !h-[50px] !rounded-xl !bg-white !outline-none"
              type="email"
              placeholder="Enter Your Email Address..."
            />
            <button className="footBtn absolute rounded-xl cursor-pointer text-white">
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="footerContainer">
          <div className="aboutTravel w-[25%]">
            <span className="font-bold text-[25px] cursor-pointer">
              Tour<span className="khan ">Khan</span>
            </span>
            <p className="w-[70%] text-[17px] opacity-[0.7] ">
              Travel is the movement people locations Travel bicycle train boat
              airplane ship and trip.
            </p>
          </div>

        <div className="links">
          <h2 className="font-semibold text-[20px] ">Useful Links</h2>
          <div className="link flex flex-col text-[17px] opacity-[0.7]">
            <span>
              <Link href={"/"}>Home</Link>
            </span>
            <span>
              <Link href={"/blog"}>Blog</Link>
            </span>
            <span>
              <Link href={"/about"}>About Us</Link>
            </span>
            <span>
              <Link href={"/contact"}>Contact</Link>
            </span>
          </div>
        </div>

        <div className="destionations">
          <h2 className="font-semibold text-[20px]">Destination</h2>
          <div className="dests flex flex-col text-[17px] opacity-[0.7]">
            <Link href={"/"}>South America</Link>
            <Link href={"/"}>Middle East</Link>
            <Link href={"/"}>San Franc Rica</Link>
            <Link href={"/"}>New York</Link>
            <Link href={"/"}>Tokyo</Link>
          </div>
        </div>

        <div className="contact">
          <h2 className="font-semibold text-[20px]">Contact</h2>
          <div className="contacts text-[17px] opacity-[0.7]">
            <div className="location flex gap-[10px] items-center cursor-pointer duration-300 ease in hover:text-red-700">
              <FaLocationDot /> <span>Apple Street 180/B2, Los Angeles</span>
            </div>
            <div className="call flex gap-[10px] items-center cursor-pointer duration-300 ease in hover:text-red-700">
              <IoCall />
              <span>+ 123 456 7890</span>
            </div>

            <div className="email flex gap-[10px] items-center cursor-pointer duration-300 ease in hover:text-red-700">
              <MdEmail />
              <span>tourkhancy@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lastFooter text-center">
        <div className="lastCont w-[90%] ">
          <p className="cursor-pointer">
            © 2025 - All Rights Reserved | Created By ThemeWold
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
