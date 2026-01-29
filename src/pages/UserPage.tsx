import { getUser } from "@/api/getUser";
import UserStories from "@/components/sections/UserStories";
import UserBlock from "@/components/ui/UserBlock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// const user = {
//   uid: "IMG_0717_bwjnt9",
//   displayName: "Danylo Nutella",
//   description:
//     "lorem100lor em100lorem100l orem100lorem100lo rem100lorem10 0lorem100lorem10 0lorem 100 lorem1 00lor em100lor em100lore m100lorem100lorem100",
// };
const UserPage = () => {
  const { travellerUid } = useParams();
  console.log("travellerUid :>> ", travellerUid);
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const fetchUser = async () => {
      console.log("fetching");
      const data = await getUser(travellerUid!);
      console.log("data :>> ", data);
      setUser(data);
    };
    fetchUser();
  }, [travellerUid]);
  useEffect(() => console.log("user :>> ", user), [user]);
  return (
    <>
      {user && <UserBlock user={user} />}
      <UserStories />
    </>
  );
};

export default UserPage;
