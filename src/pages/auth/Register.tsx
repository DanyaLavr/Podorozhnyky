import AuthForm from "@/components/auth/form/AuthForm";
import AuthHeading from "@/components/auth/heading/AuthHeading";
import registerFormConfig from "@/lib/auth/register/config";
import { registerUser } from "@/redux/auth/operations";
import { useAppDispatch } from "@/redux/hooks";
import type { IRegisterUserProps } from "@/types/auth/form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values: IRegisterUserProps) => {
    await dispatch(registerUser(values)).unwrap();
    navigate("/");
  };
  return (
    <>
      <AuthHeading
        title="Реєстрація"
        description="Раді вас бачити у спільноті мандрівників!"
      />
      <AuthForm<IRegisterUserProps>
        schema={registerFormConfig}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default Register;
