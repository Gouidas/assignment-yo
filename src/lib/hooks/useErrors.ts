import { useState, useCallback } from "react";

// This hook manages an error state, providing methods to set, handle, and reset the error state.
// It is a simple way of handling errors locally within a component.
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
