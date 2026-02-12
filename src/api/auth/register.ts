import { auth } from "@/lib/firebase/app";
import type { IRegisterUserProps } from "@/types/auth/form";
import type { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";

const register = async ({ fullName, email, password }: IRegisterUserProps) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return { uid: user.user.uid, displayName: fullName };
  } catch (error) {
    throw (error as FirebaseError).code;
  }
};

export default register;
