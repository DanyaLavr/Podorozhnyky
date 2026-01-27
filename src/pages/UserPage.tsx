import UserStories from "@/components/sections/UserStories";
import UserBlock from "@/components/ui/UserBlock";
const user = {
  uid: "IMG_0717_bwjnt9",
  displayName: "Danylo Nutella",
  description:
    "lorem100lor em100lorem100l orem100lorem100lo rem100lorem10 0lorem100lorem10 0lorem 100 lorem1 00lor em100lor em100lore m100lorem100lorem100",
};
const UserPage = () => {
  return (
    <div>
      <UserBlock user={user} />
      <UserStories />
    </div>
  );
};

export default UserPage;
