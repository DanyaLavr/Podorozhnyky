import type { TInputConfig } from "./inputs";

export interface IAuthFormConfig {
  name: string;
  initialValues: {
    fullName?: string;
    email: string;
    password: string;
  };
  validationSchema: unknown;
  inputs: TInputConfig[];
  button: {
    content: string;
  };
}
