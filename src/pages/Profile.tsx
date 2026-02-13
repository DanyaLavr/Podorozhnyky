import ProfilePosts from "@/sections/ProfilePosts";
import UserBlock from "@/components/ui/UserBlock";
import { selectUser } from "@/redux/auth/selectors";
import { useAppSelector } from "@/redux/hooks";

const Profile = () => {
  const user = useAppSelector(selectUser);

  if (!user) {
    return null;
  }
  return (
    <>
      {/* <Header/> */}
      <main>
        <UserBlock user={user} />
        <ProfilePosts />
      </main>
      {/* <Footer/> */}
    </>
  );
};

export default Profile;
