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
export interface ILoginUserProps {
  email: string;
  password: string;
}

export interface IRegisterUserProps {
  fullName: string;
  email: string;
  password: string;
}

export interface ICreateUserData {
  uid: string;
  displayName: string;
}

export interface IGetUserData {
  uid: string;
}
