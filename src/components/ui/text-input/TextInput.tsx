import { ErrorMessage, Field } from "formik";
import styles from "./text-input.module.scss";
interface IProps {
  type: string;
  name: string;
  placeholder?: string;
  title?: string;
}
const TextInput = ({ type, name, placeholder, title }: IProps) => {
  return (
    <div className={`${styles.container} relative`}>
      {title && <p className="font-main desktop:text-lg">{title}</p>}
      <Field
        className="rounded-lg border w-full border-gray-900/15 text-gray-900 p-2 font-main text-lg focus:border-blue-400 placeholder:text-gray-900/60 placeholder:font-main placeholder:text-lg"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        component="div"
        className={`${styles.error} text-error text-xs font-main absolute -bottom-5`}
      />
    </div>
  );
};

export default TextInput;
