import { getUser } from "@/api/getUser";
import UserStories from "@/components/sections/UserStories";
import UserBlock from "@/components/ui/UserBlock";
import type { IUser } from "@/types/user/user";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { travellerUid } = useParams();
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser(travellerUid!);
      setUser(data);
    };
    fetchUser();
  }, [travellerUid]);
  return (
    <>
      {user && <UserBlock user={user} />}
      <UserStories />
    </>
  );
};

export default UserPage;
