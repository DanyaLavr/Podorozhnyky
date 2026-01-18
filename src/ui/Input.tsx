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

const Input: React.FC<InputConfig> = ({ variant, config }) => {
  switch (variant) {
    case "input":
      return (
        <TextInput
          name={config.name}
          type={config.type ?? "text"}
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
