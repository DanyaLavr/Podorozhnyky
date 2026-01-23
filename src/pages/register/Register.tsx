import AuthForm from "@/components/auth/form/AuthForm";
import AuthHeading from "@/components/auth/heading/AuthHeading";
import registerFormConfig from "@/lib/auth/register/config";
import { registerUser, type IRegisterUserProps } from "@/redux/auth/operations";
import { useAppDispatch } from "@/redux/hooks";

const Register = () => {
  const dispatch = useAppDispatch();
  const onSubmit = async (values: IRegisterUserProps) => {
    await dispatch(registerUser(values));
  };
  return (
    <>
      <AuthHeading
        title="Реєстрація"
        description="Раді вас бачити у спільноті мандрівників!"
      />
      <AuthForm<IRegisterUserProps>
        shema={registerFormConfig}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default Register;
