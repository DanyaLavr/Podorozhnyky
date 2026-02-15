import { useEffect, useState } from "react";

const STORAGE_KEY = "savedStories";

export const useSavedStories = () => {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    setSavedIds(raw ? JSON.parse(raw) : []);
  }, []);

  const save = (id: string) => {
    setSavedIds((prev) => {
      if (prev.includes(id)) return prev;
      const updated = [...prev, id];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const remove = (id: string) => {
    setSavedIds((prev) => {
      const updated = prev.filter((itemId) => itemId !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const toggle = (id: string) => {
    setSavedIds((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const isSaved = (id: string) => savedIds.includes(id);

  return {
    savedIds,
    isSaved,
    save,
    remove,
    toggle,
  };
};
