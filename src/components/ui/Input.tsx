import SelectItem from "./SelectItem";
import TextArea from "./TextArea";
import TextInput from "./TextInput";

type TType = "text" | "number" | "password" | "email";

type InputConfig =
  | {
      variant: "input";
      config: {
        name: string;
        type: TType;
        placeholder: string;
      };
    }
  | {
      variant: "select";
      config: {
        placeholder: string;
        options: { label: string; value: string }[];
      };
    }
  | {
      variant: "area";
      config: {
        name: string;
        placeholder: string;
      };
    };

const Input = ({ variant, config }: InputConfig) => {
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
      return <TextArea name={config.name} placeholder={config.placeholder} />;

    default:
      return null;
  }
};

export default Input;
