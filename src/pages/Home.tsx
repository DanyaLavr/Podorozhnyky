import { Hero } from "@/sections/hero/Hero";
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
    </>
  );
};

export default Home;
