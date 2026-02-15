import { Hero } from "@/sections/hero/Hero";
import InfoModal from "@/sections/info-modal/InfoModal";
import JoinToUs from "@/sections/join-to-us/JoinToUs";
import Project from "@/sections/project/Project";
import PopularStoriesSection from "@/sections/PopularStories/PopularStories";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectIsLogoutModalOpen } from "@/redux/ui/selectors";
import { closeLogoutModal } from "@/redux/ui/uiSlice";
import { logoutUser } from "@/redux/auth/operations";

const Home = () => {
  const dispatch = useAppDispatch();
  const isLogoutModalOpen = useAppSelector(selectIsLogoutModalOpen);

  const handleLogoutConfirm = async () => {
    await dispatch(logoutUser());
    dispatch(closeLogoutModal());
  };

  const handleLogoutCancel = () => {
    dispatch(closeLogoutModal());
  };

  return (
    <>
      <Hero />
      <Project />
      <PopularStoriesSection />
      <JoinToUs />

      <InfoModal
        isOpen={isLogoutModalOpen}
        title="Ви точно хочете вийти?"
        text="Ми будемо сумувати за вами!"
        confirmButtonText="Відмінити"
        cancelButtonText="Вийти"
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />
    </>
  );
};

export default Home;
