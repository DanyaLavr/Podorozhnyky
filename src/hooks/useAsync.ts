import { useState } from "react";

const useAsync = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const run = async <T>(callback: () => Promise<T>): Promise<T | undefined> => {
    setIsLoading(true);
    setError(null);
    try {
      return await callback();
    } catch (e) {
      console.log("e :>> ", e);
      setError(String(e));
    } finally {
      setIsLoading(false);
    }
  };
  return { run, isLoading, error };
};

export default useAsync;
