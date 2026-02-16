import ProfilePosts from "@/sections/ProfilePosts";
import UserBlock from "@/components/ui/UserBlock";
import { selectAuthIsLoading, selectUser } from "@/redux/auth/selectors";
import { useAppSelector } from "@/redux/hooks";
import Loader from "@/components/ui/Loader";

const Profile = () => {
  const user = useAppSelector(selectUser);
  const isLoading = useAppSelector(selectAuthIsLoading);

  if (isLoading) {
    return (
      <section className="section">
        <div className="container">
          <Loader
            color="#000"
            loading={true}
            cssOverride={{
              marginTop: "50vh",
            }}
          />
        </div>
      </section>
    );
  }
  if (!user) {
    return null;
  }
  return (
    <>
      <UserBlock user={user} />
      <ProfilePosts />
    </>
  );
};

export default Profile;
