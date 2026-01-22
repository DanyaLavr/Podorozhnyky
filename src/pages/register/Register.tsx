import AuthForm from "@/components/auth/form/AuthForm";
import AuthHeading from "@/components/auth/heading/AuthHeading";
import registerFormConfig from "@/lib/auth/register/config";

const Register = () => {
  return (
    <>
      <AuthHeading
        title="Реєстрація"
        description="Раді вас бачити у спільноті мандрівників!"
      />
      <AuthForm shema={registerFormConfig} onSubmit={() => {}} />
    </>
  );
};

export default Register;
