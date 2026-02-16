import { selectUser } from "@/redux/auth/selectors";
import { useAppSelector } from "@/redux/hooks";

const useAuth = () => {
  const user = useAppSelector(selectUser);
  console.log("user :>> ", user);
  const isLoggedIn = !!user?.uid;

  return { user, isLoggedIn };
};

export default useAuth;
