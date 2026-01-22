import Input from "@/components/ui/Input";
import { Form, Formik } from "formik";

type TSelectOption = {
  label: string;
  value: string;
};
type TType = "text" | "password" | "email";
type AuthInput =
  | {
      variant: "input";
      config: { name: string; type: TType; placeholder: string };
    }
  | {
      variant: "select";
      config: {
        name: string;
        placeholder: string;
        options: TSelectOption[];
      };
    }
  | {
      variant: "area";
      config: { name: string; placeholder: string };
    };
interface IProps {
  shema: {
    inputs: AuthInput[];
  };
  onSubmit: () => void;
}
const AuthForm = ({ shema, onSubmit }: IProps) => {
  const { inputs } = shema;
  return (
    <Formik validationSchema={{}} initialValues={{}} onSubmit={onSubmit}>
      <Form>
        {inputs.map((elem) => (
          <Input key={elem.config.name} {...elem} />
        ))}
      </Form>
    </Formik>
  );
};

export default AuthForm;
