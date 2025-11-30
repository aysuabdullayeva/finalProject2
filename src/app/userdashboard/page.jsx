"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      router.push("/login");
    } else {
      setUser(storedUser);
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  if (!user) return null;

  const initials =
    user.personName || user.email
      ? (user.personName ? user.personName[0] : user.email[0]).toUpperCase()
      : "U";

  const copyEmail = () => {
    navigator.clipboard.writeText(user.email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 p-6">
      {copied && (
        <div className="absolute top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
          Email copied!
        </div>
      )}

      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-6 p-8 md:p-10">
          <div className="flex-shrink-0 flex items-center gap-4 w-full md:w-auto">
            <div className="flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 text-white text-3xl md:text-4xl font-bold shadow-lg">
              {initials}
            </div>
            <div className="hidden md:block">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                {user.personName || "User"}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{user.surname}</p>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Welcome back,
                </h3>
                <p className="text-xl font-bold text-gray-900 mt-1 md:hidden">
                  {user.personName || "User"}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm font-medium hover:shadow-md transition duration-200 bg-white"
                >
                  Copy email
                </button>

                <button
                  onClick={logout}
                  className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-full text-sm font-semibold hover:bg-red-600 transition duration-200 shadow-sm"
                >
                  Logout
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium text-gray-800 break-all">
                  {user.email}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-500">Age</p>
                <p className="text-sm font-medium text-gray-800">
                  {user.age ?? "-"}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-500">Surname</p>
                <p className="text-sm font-medium text-gray-800">
                  {user.surname || "-"}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-dashed border-gray-200 pt-5">
              <p className="text-sm text-gray-600">
                Here you can view your account details or navigate to additional
                settings.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;