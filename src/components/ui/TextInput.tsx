import { ErrorMessage, Field } from "formik";
interface IProps {
  type: string;
  name: string;
  placeholder?: string;
  title?: string;
}
const TextInput = ({ type, name, placeholder, title }: IProps) => {
  return (
    <div className="grid gap-2">
      {title && <p className="font-main desktop:text-lg">{title}</p>}
      <Field
        className="rounded-lg border border-gray-900/15 text-gray-900 p-2 font-main text-lg focus:border-blue-400 placeholder:text-gray-900/60 placeholder:font-main placeholder:text-lg"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default TextInput;
