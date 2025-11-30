import React from "react";
import LoginAdminForm from "../components/LoginAdminForm/page"; // bir qovluq yuxarı, sonra components

const LoginAdmin = () => {
  return (
    <div className="flex flex-col items-center !p-5">
      <h2 className="text-2xl font-bold !mb-4">Admin Login</h2>
      <LoginAdminForm />
    </div>
  );
};

export default LoginAdmin;