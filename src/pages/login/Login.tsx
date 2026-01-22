import AuthForm from "@/components/auth/form/AuthForm";
import AuthHeading from "@/components/auth/heading/AuthHeading";
import loginFormConfig from "@/lib/auth/login/config";

const Login = () => {
  return (
    <>
      <AuthHeading
        title="Вхід"
        description="Вітаємо знову у спільноту мандрівників!"
      />
      <AuthForm shema={loginFormConfig} onSubmit={() => {}} />
    </>
  );
};

export default Login;
