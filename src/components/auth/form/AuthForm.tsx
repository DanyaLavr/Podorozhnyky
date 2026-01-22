import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import type { IAuthFormConfig } from "@/types/index";
import { Form, Formik } from "formik";

// type TSelectOption = {
//   label: string;
//   value: string;
// };
// type AuthInput =
//   | {
//       variant: "input";
//       config: {
//         name: string;
//         type: TType;
//         placeholder?: string;
//         title?: string;
//       };
//     }
//   | {
//       variant: "select";
//       config: {
//         name: string;
//         placeholder: string;
//         options: TSelectOption[];
//       };
//     }
//   | {
//       variant: "area";
//       config: { name: string; placeholder: string };
//     };
interface IProps {
  shema: IAuthFormConfig;
  onSubmit: () => void;
}
const AuthForm = ({ shema, onSubmit }: IProps) => {
  const { validationSchema, initialValues, inputs, button } = shema;
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form className="grid gap-6 mt-8">
        {inputs.map((elem) => (
          <Input key={elem.config.name} {...elem} />
        ))}
        <Button variant="primary" className="py-2.5">
          {button.content}
        </Button>
      </Form>
    </Formik>
  );
};

export default AuthForm;
