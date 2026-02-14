import { Hero } from "@/sections/hero/Hero";
import InfoModal from "@/sections/info-modal/InfoModal";
import JoinToUs from "@/sections/join-to-us/JoinToUs";
import Project from "@/sections/project/Project";
import PopularStoriesSection from "@/sections/PopularStories/PopularStories";
const Home = () => {
  return (
    <>
      <Hero />
      <Project />
      <PopularStoriesSection />
      <JoinToUs />

      <InfoModal
        title="Ви точно хочете вийти?"
        text="Ми будемо сумувати за вами!"
        confirmButtonText="Відмінити"
        cancelButtonText="Вийти"
      />
    </>
  );
};

export default Home;
