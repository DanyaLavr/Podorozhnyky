import AuthForm from "@/components/auth/form/AuthForm";
import AuthHeading from "@/components/auth/heading/AuthHeading";
import loginFormConfig from "@/lib/auth/login/config";
import { loginUser, type ILoginUserProps } from "@/redux/auth/operations";
import { useAppDispatch } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = async (values: ILoginUserProps) => {
    await dispatch(loginUser(values)).unwrap();
    navigate("/");
  };
  return (
    <>
      <AuthHeading
        title="Вхід"
        description="Вітаємо знову у спільноту мандрівників!"
      />
      <AuthForm schema={loginFormConfig} onSubmit={onSubmit} />
    </>
  );
};

export default Login;
