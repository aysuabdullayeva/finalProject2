"use client";
import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";
// import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const { id } = use(params);
  // const { id } = React.use(params)
  const router = useRouter();

  const [allData, setAllData] = useState({});

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(
          `https://691c726e3aaeed735c90e303.mockapi.io/persondata/${id}`
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
            <div className="text-center font-bold text-[45px] !p-[28px]">
              {allData.title}
            </div>
            <div className="w-[80%] !m-auto text-[20px] !p-[15px]">
              {allData.date} <span> | 0 Comment</span>
            </div>
            <div className="flex gap-[20px] !mb-[27px]">
              {allData.content}
              <img
                className="w-[450px] h-[450px] rounded-[20px] object-cover"
                src={allData.img}
                alt=""
              />
            </div>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-5 text-[20px] !m-3 cursor-pointer duration-500 ease-out hover:text-orange-500 hover:!underline"
            >
              <IoArrowBack /> <span>Previous</span>
            </button>
            <span className="!ml-13 text-[18px] ">
              Vineyard Tours for Connoisseurs
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
// react use = async await
export default Page;