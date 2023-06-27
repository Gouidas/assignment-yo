import { renderHook } from "@testing-library/react";
import { useInterval } from "../src/lib/hooks/useInterval";

jest.useFakeTimers();

describe("useInterval", () => {
  it("should call the callback function at the specified interval", () => {
    const callback = jest.fn();
    const delay = 1000;

    renderHook(() => useInterval(callback, delay));

    jest.advanceTimersByTime(delay);

    expect(callback).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(delay);

    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("should clear the interval when the delay is null", () => {
    const callback = jest.fn();
    const delay = 1000;

    const { unmount } = renderHook(() => useInterval(callback, delay));

    unmount();
    
    jest.advanceTimersByTime(delay);

    expect(callback).not.toHaveBeenCalled();
  });
});
