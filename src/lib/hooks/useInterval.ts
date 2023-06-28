import { useEffect, useRef } from "react";

// useInterval is a custom hook that will call the provided callback function
// every 'delay' milliseconds. It's an encapsulation of setInterval that uses
// React hooks. If delay is null, the interval is "paused".
export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
