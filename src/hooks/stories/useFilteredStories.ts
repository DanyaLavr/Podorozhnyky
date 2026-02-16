import { useMemo } from "react";
import type { IStory } from "@/types/user/user";

export function useFilteredStories(posts: IStory[], category?: string) {
  return useMemo(() => {
    if (!category) return posts;
    return posts.filter((post) => post.category === category);
  }, [posts, category]);
}
