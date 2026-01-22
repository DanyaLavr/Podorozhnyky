import { loginInitialValues, loginShema } from "./formik";
import type { IAuthFormConfig } from "@/types";

const loginFormConfig: IAuthFormConfig = {
  name: "login",
  initialValues: loginInitialValues,
  validationSchema: loginShema,
  inputs: [
    {
      variant: "input",
      config: {
        name: "email",
        title: "Пошта*",
        placeholder: "hello@podorozhnyky.ua",
        type: "email",
      },
    },
    {
      variant: "input",
      config: {
        name: "password",
        title: "Пароль*",
        placeholder: "********",
        type: "password",
      },
    },
  ],
  button: {
    content: "Увійти",
  },
};
export default loginFormConfig;
