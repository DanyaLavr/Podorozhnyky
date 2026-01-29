import ProfilePosts from "@/components/sections/ProfilePosts";
import UserBlock from "@/components/ui/UserBlock";
const user = {
  uid: "id-123456",
  imageUrl:
    "https://res.cloudinary.com/dizg6rj7g/image/upload/v1769524892/IMG_0717_bwjnt9",
  displayName: "Danya Lavr",
  favoritesPosts: ["cS8YdTRM1o2MY8cS8kju", "chqDjvte98jo1A963W32"],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros ipsum dolor sit amet,  ipsum dolor stem",
};
const Profile = () => {
  return (
    <>
      <UserBlock user={user} />
      <ProfilePosts />
    </>
  );
};

export default Profile;
