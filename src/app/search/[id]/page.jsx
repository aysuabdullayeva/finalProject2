"use client";
import React, { useEffect, useState, use } from "react";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const resParams = use(params);
  const { id } = resParams;

  const router = useRouter();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(
          `https://691c726e3aaeed735c90e303.mockapi.io/persondata/${id}`
        );

        console.log("DETAIL DATA:", response.data);
        setProduct(response.data);
      } catch (error) {
        console.log("api error", error);
      }
    };

    getApi();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="w-[100%] m-auto">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[400px] object-cover  mb-8"
      />

      <div className="flex flex-col items-center gap-6 mb-8">
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-6">{product.date} | 203 Comments</p>
        <p className="text-lg text-center">{product.description}</p>
        <span className="text-[17px]">{product.price}</span>
        <button
          onClick={() => router.back()}
          className="flex items-center gap-3 text-xl hover:text-orange-500 transition"
        >
          <IoArrowBack /> Back
        </button>
      </div>
    </div>
  );
};

export default Page;
