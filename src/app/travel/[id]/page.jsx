"use client";
import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import "./details.css"

const Page = ({ params }) => {
  const { id } = use(params);
  const router = useRouter();

  const [allData, setAllData] = useState({});
  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(
          `https://691357a4f34a2ff1170ba1d8.mockapi.io/detail/${id}`
        );
        setAllData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);

  return (
    <div>
      {allData && (
        <div>
          <img src={allData.image} alt="" />

          <div className=" w-[90%] !m-auto">
            <div className="toptik text-center font-bold text-[45px] !p-[28px]">
              {allData.title}
            </div>
            <div className="dateComment w-[80%] !m-auto text-[20px] !p-[15px] font-bold">
              {allData.date} <span> | • 0 Comment</span>
            </div>

            <div className="maincontent flex justify-center gap-[20px] !mb-[27px]">
              <div className="aboutContent text-xl w-[50%] text-gray-600 text-base md:text-lg leading-relaxed">
                {allData.content}
              </div>
              <img
                className="w-[500px] h-[500px] rounded-[20px] object-cover"
                src={allData.img}
                alt=""
              />
            </div>

            <div className="places">
              <div className="toptik placetitle text-bold text-center font-bold text-3xl !m-8">
                {allData.placetitle}
              </div>
              <div className="placesContent flex !m-5">
                <img
                  className="w-[500px] h-[500px] rounded-[20px] object-cover"
                  src={allData.placeimage}
                  alt=""
                />
                <p className="text-center !m-8 text-xl w-[50%] text-gray-600 text-base md:text-lg leading-relaxed">
                  {allData.placecontent}
                </p>
              </div>
            </div>

            <div className="hotels">
              <div className="toptik hoteltitle text-bold text-center font-bold text-3xl !m-8">
                {allData.hoteltitle}
              </div>

              <div className="hotelsContent flex !mb-5">
                <div className="!m-5 flex flex-col items-center text-xl w-[50%] text-gray-600 text-base md:text-lg leading-relaxed">
                  {allData.hotelcontent}
                </div>
                <img
                  className="w-[500px] h-[500px] rounded-[20px] object-cover"
                  src={allData.hotelimage}
                  alt=""
                />
              </div>
            </div>
          </div>

          <button
            onClick={() => router.back()}
            className="backBtn flex items-center gap-5 text-[20px] !m-3 cursor-pointer duration-500 ease-out hover:text-orange-500 hover:!underline"
          >
            <IoArrowBack /> <span>Previous</span>
          </button>
          <span className="backText !m-13 text-[18px] ">
            Vineyard Tours for Connoisseurs
          </span>
        </div>
      )}
    </div>
  );
};
export default Page;
