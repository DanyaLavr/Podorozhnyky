import type { IAuthFormConfig } from "@/types/auth/form";
import { registerInitialValues, registerSchema } from "./formik";

const registerFormConfig: IAuthFormConfig = {
  name: "register",
  initialValues: registerInitialValues,
  validationSchema: registerSchema,
  inputs: [
    {
      variant: "input",
      config: {
        name: "fullName",
        title: "Імʼя та Прізвище*",
        placeholder: "Ваше імʼя та прізвище",
        type: "text",
      },
    },
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
    content: "Зареєструватись",
  },
};
export default registerFormConfig;
