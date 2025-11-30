"use client";
import { getUser, createUser } from "@/redux/features/user/userSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

const Auth = ({ name }) => {
  const [personName, setPersonName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { users } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const getLogin = (e) => {
    e.preventDefault();
    const userFound = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      localStorage.setItem("user", JSON.stringify(userFound));
      router.push("/userdashboard");
    } else {
      alert("Incorrect email or password");
    }

    setEmail("");
    setPassword("");
  };

  const getRegister = (e) => {
    e.preventDefault();

    const emailExists = users.find((u) => u.email === email);
    if (emailExists) {
      alert("This email is already registered");
      return;
    }

    const newUser = {
      email,
      password,
      age,
      personName,
      surname,
    };

    dispatch(createUser(newUser));

    localStorage.setItem("user", JSON.stringify(newUser));

    router.push("/userdashboard");

    setEmail("");
    setPassword("");
    setAge("");
    setPersonName("");
    setSurname("");
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold !mb-5">
        {name ? name + " page" : "Log In Page"}
      </h1>

      <form className="flex flex-col gap-3 w-[50%] !m-auto bg-black !p-[20px] text-white rounded">
        {name && (
          <>
            <label>Name</label>
            <input
              required
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              className="!p-2 rounded-2xl bg-white text-black"
            />

            <label>Surname</label>
            <input
              required
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="!p-2 rounded-2xl bg-white text-black"
            />

            <label>Age</label>
            <input
              required
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value <= 0 ? 0 : e.target.value)}
              className="!p-2 rounded-2xl bg-white text-black"
            />
          </>
        )}

        <label>Email</label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="!p-2 rounded-2xl bg-white text-black"
        />

        <div className="relative">
          <label>Password</label>
          <input
            required
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="!p-2 rounded-2xl bg-white text-black w-full"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </span>
        </div>

        <button
          onClick={name ? getRegister : getLogin}
          className="bg-orange-600 w-[50%] !m-auto !p-2 hover:bg-white hover:text-black rounded-4xl duration-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Auth;