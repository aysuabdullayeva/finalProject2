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
          `https://691c726e3aaeed735c90e303.mockapi.io/persondata/${id}`
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
        <p key={item.id}> item={item}</p>
      ))}
</div>
  );
};

export default Page;
