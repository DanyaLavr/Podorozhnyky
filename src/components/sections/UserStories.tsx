import { useEffect, useState } from "react";
import H2 from "../ui/H2";
import StoriesMessage from "../ui/StoriesMessage";
import { useParams } from "react-router-dom";
import type { Story } from "@/types/user/user";
import { getUserStories } from "@/api/getUserStories";

const UserStories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const { travellerUid } = useParams();

  useEffect(() => {
    const getData = async (creatorUid: string) => {
      const data = await getUserStories(creatorUid);
      setStories(data);
    };
    getData(travellerUid!);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <H2>Історії Мандрівника</H2>
        {!stories.length && (
          <StoriesMessage
            text="Цей користувач ще не публікував історій"
            buttonContent="Назад до історій"
            buttonLink="/stories"
          />
        )}
      </div>
    </section>
  );
};

export default UserStories;
