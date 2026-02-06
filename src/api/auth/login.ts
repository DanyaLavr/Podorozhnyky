import { auth } from "@/lib/firebase/app";

import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";

interface IProps {
  email: string;
  password: string;
}

const login = async ({ email, password }: IProps) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user.user.uid;
  } catch (error) {
    throw (error as FirebaseError).code;
  }
};

export default login;
