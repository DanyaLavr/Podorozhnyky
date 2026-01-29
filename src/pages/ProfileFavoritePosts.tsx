import StoriesMessage from "@/components/ui/StoriesMessage";
import type { IStory } from "@/types/user/user";
import { useState } from "react";
const user = {
  uid: "id-123456",
  displayName: "Danylo Nutella",
  description:
    "lorem100lor em100lorem100l orem100lorem100lo rem100lorem10 0lorem100lorem10 0lorem 100 lorem1 00lor em100lor em100lore m100lorem100lorem100",
};
const ProfileFavoritePosts = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  if (!stories.length) {
    return (
      <StoriesMessage
        text="У вас ще немає збережених історій, мершій збережіть вашу першу історію!"
        buttonContent="До історій"
        buttonLink="/stories"
      />
    );
  }
  return <div>ProfileFavoritePosts</div>;
};

export default ProfileFavoritePosts;
