import { loginInitialValues, loginSchema } from "./formik";
import type { IAuthFormConfig } from "@/types/auth/form";

const loginFormConfig: IAuthFormConfig = {
  name: "login",
  initialValues: loginInitialValues,
  validationSchema: loginSchema,
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
