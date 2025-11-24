import * as Yup from "yup";

export const formRegisterSchema = Yup.object().shape({
  name: Yup.string().required("ad hissesini bosh saxlamayin"),
  surname: Yup.string().required("soyad hissesini bosh saxlamayin"),
  age: Yup.number("yasinizi reqem formatiinda daxil edin")
    .integer("tam reqem daxil edin")
    .positive("musbet reqem daxil edin")
    .required("bosh saxlamayin"),
  email: Yup.string().email("duzgun daxil edin").required("bosh saxlamayin"),
  password: Yup.string().required("bosh saxlamayin"),
  confirmPassword: Yup.string()
    .required("bosh saxlamayin")
    .oneOf([Yup.ref("password"), null], "passwordla eyni deyil"),
  term: Yup.boolean().oneOf([true]),

  // NEW FIELDS
  arrived: Yup.string().required("Arrived bosh saxlamayin"),
  date: Yup.date().required("Tarixi daxil edin"),
  time: Yup.string().required("Saati daxil edin"),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Telefon duzgun formatda deyil")
    .required("Telefon nomresini daxil edin"),
  guests: Yup.number()
    .integer("Tam reqem daxil edin")
    .positive("Musbet reqem daxil edin")
    .required("Qonaq sayini daxil edin"),
  message: Yup.string().max(500, "Mesaj max 500 simvol ola biler"),
});
