import { useState, useCallback } from "react";

const useErrors = () => {
  const [error, setError] = useState<string | null>(null);

  const handleError = useCallback((err: string) => {
    setError(err);
  }, []);

  const resetError = useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, resetError };
};

export default useErrors;
