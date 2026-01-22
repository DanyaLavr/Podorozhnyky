import type { TInputConfig } from "@/types/auth/inputs";
import SelectItem from "./SelectItem";
import TextArea from "./TextArea";
import TextInput from "./TextInput";

const Input = ({ variant, config }: TInputConfig) => {
  switch (variant) {
    case "input":
      return (
        <TextInput
          name={config.name}
          type={config.type}
          placeholder={config.placeholder}
        />
      );

    case "select":
      return (
        <SelectItem placeholder={config.placeholder} options={config.options} />
      );

    case "area":
      return <TextArea placeholder={config.placeholder} name={config.name} />;

    default:
      return null;
  }
};

export default Input;
