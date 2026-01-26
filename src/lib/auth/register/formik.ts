import * as Yup from "yup";
export const registerShema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Ваше імʼя занадто коротке!")
    .required("Імʼя - це обовʼязкове поле!"),
  email: Yup.string()
    .email("Невалідний формат пошти!")
    .required("Пошта - це обовʼязкове поле!"),
  password: Yup.string()
    .min(8, "Пароль занад-то короткий!")
    .required("Пароль - це обовʼязкове поле!"),
});

export const registerInitialValues = {
  fullName: "",
  email: "",
  password: "",
};
