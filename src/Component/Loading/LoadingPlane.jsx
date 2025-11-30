"use client";
import React, { useEffect, useState } from "react";
import { FaPlane } from "react-icons/fa";
import "./loadingPlane.css";

const LoadingPlane = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <FaPlane className="plane-icon" />
        <p>Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingPlane;
