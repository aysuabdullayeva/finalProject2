"use client";
import CntryCrs from "@/Component/CountriesCarousel/CntryCrs";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [allData, setAllData] = useState([]);
  const router = useRouter();

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
    getApi().then((item) => setAllData(item.data));
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl">Product page</h1>
      {allData.map((item) => (
        <CntryCrs key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Page;
