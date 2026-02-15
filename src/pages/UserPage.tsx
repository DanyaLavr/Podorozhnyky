import { getUser } from "@/api/user/getUser";
import UserStories from "@/sections/UserStories";
import UserBlock from "@/components/ui/UserBlock";
import type { IUser } from "@/types/user/user";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAsync from "@/hooks/useAsync";
import StoriesMessage from "@/components/ui/StoriesMessage";
import Loader from "@/components/ui/Loader";

const UserPage = () => {
  const { travellerUid } = useParams();
  const [user, setUser] = useState<IUser | null>(null);
  const { run, isLoading, error } = useAsync();
  useEffect(() => {
    const fetchUser = async () => {
      const data = await run<IUser>(() => getUser(travellerUid!));
      if (data) setUser(data);
    };
    fetchUser();
  }, [travellerUid]);

  if (isLoading) {
    return (
      <Loader
        color="#000"
        loading={isLoading}
        cssOverride={{ marginTop: "50vh" }}
      />
    );
  }
  if (error || !user) {
    return (
      <section className="section">
        <div className="container grid justify-center ">
          <StoriesMessage
            text="Здається, користувача не існує!"
            buttonContent="На головну"
            buttonLink="/"
          />
        </div>
      </section>
    );
  }
  return (
    <>
      <UserBlock user={user} />
      <UserStories />
    </>
  );
};

export default UserPage;
