import { useState, useEffect } from "react";

export const useLoading = (initialState = false) => {
  const [loading, setLoading] = useState(initialState);

  useEffect(() => {
    setLoading(initialState);
    return () => {
      setLoading(initialState);
    };
  }, []);

  return { loading, setLoading };
};
