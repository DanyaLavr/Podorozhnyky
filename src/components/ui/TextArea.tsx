import { ErrorMessage, Field } from "formik";
import { useEffect, useRef } from "react";

interface IProps {
  name: string;
  placeholder: string;
}

const TextArea = ({ name, placeholder }: IProps) => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const autoResize = () => {
    if (!inputRef.current) return;
    inputRef.current.style.height = "auto";
    inputRef.current.style.height = inputRef.current.scrollHeight + "px";
  };

  useEffect(() => {
    autoResize();
  }, [autoResize]);

  return (
    <div className="relative">
      <Field
        innerRef={inputRef}
        as="textarea"
        name={name}
        placeholder={placeholder}
        rows={6}
        onInput={autoResize}
        className="resize-none w-full overflow-hidden border border-gray-900/15 text-gray-900 p-2 font-main text-lg focus:border-blue-400 placeholder:text-gray-900/60 placeholder:font-main placeholder:text-lg"
      />
      <ErrorMessage name={name} className="absolute -bottom-5" />
    </div>
  );
};

export default TextArea;
