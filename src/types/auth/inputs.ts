export type TInputsTypes = "text" | "number" | "password" | "email";

export type TInputConfig =
  | {
      variant: "input";
      config: {
        name: string;
        type: TInputsTypes;
        placeholder?: string;
        title?: string;
      };
    }
  | {
      variant: "select";
      config: {
        name: string;
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
