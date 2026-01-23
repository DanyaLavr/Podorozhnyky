import AuthForm from "@/components/auth/form/AuthForm";
import AuthHeading from "@/components/auth/heading/AuthHeading";
import loginFormConfig from "@/lib/auth/login/config";
import { loginUser, type ILoginUserProps } from "@/redux/auth/operations";
import { useAppDispatch } from "@/redux/hooks";

const Login = () => {
  const dispatch = useAppDispatch();
  const onSubmit = async (values: ILoginUserProps) => {
    await dispatch(loginUser(values));
  };
  return (
    <>
      <AuthHeading
        title="Вхід"
        description="Вітаємо знову у спільноту мандрівників!"
      />
      <AuthForm shema={loginFormConfig} onSubmit={onSubmit} />
    </>
  );
};

export default Login;
