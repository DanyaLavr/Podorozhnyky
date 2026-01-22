import { loginInitialValues, loginShema } from "./formik";

const loginFormConfig = {
  name: "login",
  initialValues: loginInitialValues,
  validationSchema: loginShema,
  inputs: [
    {
      variant: "input",
      congig: {
        name: "email",
        placeholder: "Email",
        type: "email",
      },
    },
    {
      variant: "input",
      congig: {
        name: "password",
        placeholder: "Password",
        type: "password",
      },
    },
  ],
};
export default loginFormConfig;
