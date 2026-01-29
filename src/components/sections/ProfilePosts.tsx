import { Outlet } from "react-router-dom";
import NavToggle from "../ui/NavToggle";

const ProfilePosts = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="tablet:w-105.5">
          <NavToggle
            firstData={{
              content: "Збережені історії",
              link: "/profile/favorite",
            }}
            secondData={{
              content: "Мої історії",
              link: "/profile/user-posts",
            }}
          />
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default ProfilePosts;
