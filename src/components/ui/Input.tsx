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
          title={config?.title}
          placeholder={config?.placeholder}
        />
      );

    case "select":
      return (
        <SelectItem placeholder={config.placeholder} options={config.options} />
      );

    case "area":
      return <TextArea name={config.name} placeholder={config.placeholder} />;

    default:
      return null;
  }
};

export default Input;
