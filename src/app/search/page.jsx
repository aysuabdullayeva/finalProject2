"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Page = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(
          "https://691c726e3aaeed735c90e303.mockapi.io/persondata"
        );
        setAllData(response.data);
        console.log("aldata", response.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-center text-4xl mb-5">Product page</h1>

 <div className="boxes">
          {allData.length > 0 ? (
            allData.map((item) => (
              <div
                key={item.id}
                className=" p-2 border-b text-sm hover:bg-gray-100 cursor-pointer"
              >
                <div className="boxesCard">
                  <img src={item?.image} alt="" />
                  <div className="boxDatas">
                    <div className="itemName">{item?.name}</div>
                    <div className="itemTitle">{item?.title}</div>
                    <div className="itemPrice">{item?.price}</div>
                  </div>
                  <Link  href={`/search/${item.id}`}>
                    <button type="button" className="learnMoreBtn">
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
  );
};

export default Page;
