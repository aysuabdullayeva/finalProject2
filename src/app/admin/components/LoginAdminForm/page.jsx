"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginAdminForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "aysu" && password === "1515") {
      router.push("/admin/dashboard"); 
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-80 flex flex-col gap-5"
      >

        <div className="flex flex-col">
          <label htmlFor="user" className="text-gray-600 mb-1">
            Username
          </label>
          <input
            id="user"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            placeholder="Enter your username"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-600 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginAdminForm;