import * as Yup from "yup";

export const formRegisterSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your first name"),
  surname: Yup.string().required("Please enter your surname"),
  age: Yup.number("Please enter your age in numeric format")
    .integer("Please enter a whole number")
    .positive("Please enter a positive number")
    .required("Age is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  term: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),

  // elave
  arrived: Yup.string().required("Please enter arrival information"),
  date: Yup.date().required("Please select a date"),
  time: Yup.string().required("Please select a time"),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Please enter a valid phone number")
    .required("Phone number is required"),
  guests: Yup.number()
    .integer("Please enter a whole number")
    .positive("Please enter a positive number")
    .required("Please enter the number of guests"),
  message: Yup.string().max(500, "Message can be up to 500 characters only"),
});
