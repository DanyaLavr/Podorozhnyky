import * as Yup from "yup";
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Невалідний формат пошти!")
    .required("Пошта - це обовʼязкове поле!"),
  password: Yup.string()
    .min(8, "Пароль занад-то короткий!")
    .required("Пароль - це обовʼязкове поле!"),
});

export const loginInitialValues = {
  email: "",
  password: "",
};
