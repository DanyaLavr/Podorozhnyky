import { useEffect, useRef, useState } from "react";
import H2 from "../components/ui/H2";
import StoriesMessage from "../components/ui/StoriesMessage";
import { useParams } from "react-router-dom";
import type { IStory } from "@/types/user/user";
import { getUserStories } from "@/api/user/getUserStories";
import type { QueryDocumentSnapshot } from "firebase/firestore";

const UserStories = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  const lastDocRef = useRef<QueryDocumentSnapshot | null>(null);
  const { travellerUid } = useParams();

  useEffect(() => {
    const getData = async (creatorUid: string) => {
      const data = await getUserStories(creatorUid, lastDocRef.current);
      setStories(data.stories);
      lastDocRef.current = data.lastDoc;
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
