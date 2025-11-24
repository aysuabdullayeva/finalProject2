"use client";
import { getCheckLogin, getUser } from "@/redux/features/user/userSlice";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

const Auth = ({ name }) => {
  const [personName, setPersonName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { users } = useSelector((state) => state.auth);

  // const dispatch = useDispatch();

  const getRegister = (e) => {
    e.preventDefault();

    let person = {
      email: email,
      password: password,
      age: age,
      personName: personName,
      surname: surname,
    };
    console.log(person);

    setEmail("");
    setPassword("");
    setAge("");
    setPersonName("");
    setSurname("");
  };

  const getLogin = (e) => {
    e.preventDefault();
    let person = {
      email: email,
      password: password,
    };

    // dispatch(getCheckLogin(person)).then(() => {
    // });
    console.log(person);
    setEmail("");
    setPassword("");
  };

  // useEffect(() => {
  //   dispatch(getUser());
  // }, []);

  // useEffect(() => {
  //   console.log("USERS", users);
  // }, [users]);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold !mb-5">
        {name ? name + " page" : "Log In Page"}
      </h1>
      <form
        action="#"
        className="flex flex-col !mb-10 gap-3 w-[50%] !m-auto bg-black !p-[20px] text-white rounded"
      >
        {name ? (
          <>
            <label htmlFor="name">Name</label>
            <input
              required
              placeholder="Please enter your name"
              className="!p-2 rounded-2xl border-none outline-none bg-white text-black"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              type="text"
            />
            <label htmlFor="surname">Surname</label>
            <input
              required
              placeholder="Please enter your surname"
              className="!p-2 rounded-2xl border-none outline-none bg-white text-black"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              type="text"
            />
            <label htmlFor="age">Age</label>
            <input
              required
              placeholder="Please enter your age"
              className="!p-2 rounded-2xl border-none outline-none bg-white text-black"
              value={age}
              onChange={(e) => setAge(e.target.value <= 0 ? 0 : e.target.value)}
              type="number"
            />
          </>
        ) : null}
        <label htmlFor="email">Email</label>
        <input
          required
          placeholder="Please enter your email"
          className="!p-2 rounded-2xl border-none outline-none bg-white text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <label htmlFor="password">Password</label>
        <input
          required
          placeholder="Please enter your password"
          className="!p-2 rounded-2xl border-none outline-none bg-white text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button
          onClick={name ? getRegister : getLogin}
          className="cursor-pointer bg-orange-600 w-[50%] !m-auto !p-2 hover:bg-white hover:text-black rounded-4xl duration-700 ease-out "
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Auth;
