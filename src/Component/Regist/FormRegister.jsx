"use client";
import React from "react";
import "./formRegister.css";
import axios from "axios";
import { useFormik } from "formik";
import { formRegisterSchema } from "@/Schema/FormRegisterSchema";

const FormRegister = () => {
  const getApi = async (data) => {
    await axios.post(
      "https://691357a4f34a2ff1170ba1d8.mockapi.io/detail",
      data
    );
  };

  const postRegister = (data, action) => {
    getApi(data);
    action.resetForm();
  };

  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
      term: false,

      arrived: "",
      date: "",
      time: "",
      phone: "",
      guests: "",
      message: "",
    },

    validationSchema: formRegisterSchema,
    onSubmit: postRegister,
  });

  return (
    <div className="planTrip !mt-55">
      <form className="planForm" onSubmit={handleSubmit}>
        <h1 className="!pt-5">Form</h1>

        <div className="form-item">
          {" "}
          <label htmlFor="name">Name</label>{" "}
          <input
            onChange={handleChange}
            value={values.name}
            id="name"
            type="text"
            placeholder="name"
          />{" "}
          {errors.name && <span className="error-title">{errors.name}</span>}{" "}
        </div>
        <div className="form-item">
          {" "}
          <label htmlFor="surname">Surname</label>{" "}
          <input
            onChange={handleChange}
            value={values.surname}
            id="surname"
            type="text"
            placeholder="surname"
          />{" "}
          {errors.surname && (
            <span className="error-title">{errors.surname}</span>
          )}{" "}
        </div>

        <div className="form-item">
          {" "}
          <label htmlFor="age">Age</label>{" "}
          <input
            onChange={handleChange}
            value={values.age}
            id="age"
            type="text"
            placeholder="age"
          />{" "}
          {errors.age && <span className="error-title">{errors.age}</span>}{" "}
        </div>
        <div className="form-item">
          {" "}
          <label htmlFor="email">Email</label>{" "}
          <input
            onChange={handleChange}
            value={values.email}
            id="email"
            type="text"
            placeholder="email"
          />{" "}
          {errors.email && <span className="error-title">{errors.email}</span>}{" "}
        </div>
        <div className="form-item">
          {" "}
          <label htmlFor="password">Password</label>{" "}
          <input
            onChange={handleChange}
            value={values.password}
            id="password"
            type="password"
            placeholder="password"
          />{" "}
          {errors.password && (
            <span className="error-title">{errors.password}</span>
          )}{" "}
        </div>

        <div className="form-item">
          {" "}
          <label htmlFor="confirmPassword">Confirm Password</label>{" "}
          <input
            onChange={handleChange}
            value={values.confirmPassword}
            id="confirmPassword"
            type="password"
            placeholder="confirmPassword"
          />{" "}
          {errors.confirmPassword && (
            <span className="error-title">{errors.confirmPassword}</span>
          )}{" "}
        </div>

        <div className="form-item">
          <label htmlFor="arrived">Arrived</label>
          <input
            onChange={handleChange}
            value={values.arrived}
            id="arrived"
            type="text"
            placeholder="Arrived"
          />
          {errors.arrived && (
            <span className="error-title">{errors.arrived}</span>
          )}
        </div>

        <div className="form-item">
          <label htmlFor="date">Date</label>
          <input
            onChange={handleChange}
            value={values.date}
            id="date"
            type="date"
          />
          {errors.date && <span className="error-title">{errors.date}</span>}
        </div>

        <div className="form-item">
          <label htmlFor="time">Time</label>
          <input
            onChange={handleChange}
            value={values.time}
            id="time"
            type="time"
          />
          {errors.time && <span className="error-title">{errors.time}</span>}
        </div>

        <div className="form-item">
          <label htmlFor="phone">Phone Number</label>
          <input
            onChange={handleChange}
            value={values.phone}
            id="phone"
            type="text"
            placeholder="Phone Number"
          />
          {errors.phone && <span className="error-title">{errors.phone}</span>}
        </div>

        <div className="form-item">
          <label htmlFor="guests">Guests</label>
          <input
            onChange={handleChange}
            value={values.guests}
            id="guests"
            type="number"
            placeholder="Guests"
          />
          {errors.guests && (
            <span className="error-title">{errors.guests}</span>
          )}
        </div>

        <div className="form-item messageInput">
          {/* <label htmlFor="message">Message</label> */}
          <textarea
            className="outline-none"
            onChange={handleChange}
            value={values.message}
            id="message"
            placeholder="Write your needs..."
          />
          {errors.message && (
            <span className="error-title">{errors.message}</span>
          )}
        </div>

        <div className="form-item formTerm">
          <input
            className="w-[20px] h-[20px] cursor-pointer"
            onChange={handleChange}
            checked={values.term}
            id="term"
            name="term"
            type="checkbox"
          />

          <label htmlFor="term">
            Please read and accept our{" "}
            <a className="text-red-600" href="https://example.com/">
              terms and Conditions
            </a>{" "}
            before continuing
          </label>

          {errors.term && <span className="error-title">{errors.term}</span>}
        </div>

        <input
          className="w-[50%] bg-black text-orange-400  !p-[10px] cursor-pointer  duration-500 ease-out hover:bg-green-700 hover:text-white rounded-3xl !mb-5 "
          type="submit"
        />
      </form>
    </div>
  );
};

export default FormRegister;