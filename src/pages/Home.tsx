import { Hero } from "@/sections/hero/Hero";
import InfoModal from "@/sections/info-modal/InfoModal";
import JoinToUs from "@/sections/join-to-us/JoinToUs";
import Project from "@/sections/project/Project";

const Home = () => {
  return (
    <>
      <Hero />
      <Project />
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
