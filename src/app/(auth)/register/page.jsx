import Auth from "@/Component/Auth/Auth";
import React from "react";

const page = () => {
  return (
    <div className="m-5 flex flex-col justify-between h-[100vh]">
      <Auth name={"Register"} />
    </div>
  );
};

export default page;

