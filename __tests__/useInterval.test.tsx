import { renderHook } from "@testing-library/react";
import { useInterval } from "../src/lib/hooks/useInterval";

// Mock the setInterval and clearInterval functions
jest.useFakeTimers();

describe("useInterval", () => {
  it("should call the callback function at the specified interval", () => {
    const callback = jest.fn();
    const delay = 1000;

    renderHook(() => useInterval(callback, delay));

    // Advance the timers
    jest.advanceTimersByTime(delay);

    expect(callback).toHaveBeenCalledTimes(1);

    // Advance the timers again
    jest.advanceTimersByTime(delay);

    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("should clear the interval when the delay is null", () => {
    const callback = jest.fn();
    const delay = 1000;

    const { unmount } = renderHook(() => useInterval(callback, delay));

    // Unmount the component
    unmount();

    // Advance the timers
    jest.advanceTimersByTime(delay);

    expect(callback).not.toHaveBeenCalled();
  });
});
