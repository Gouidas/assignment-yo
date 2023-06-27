import { renderHook, act } from "@testing-library/react";
import { useFetch } from "../src/lib/hooks/useFetch";

// Mock fetchFunction that returns a resolved Promise
const fetchFunctionMock = jest.fn().mockResolvedValue("test data");

describe("useFetch", () => {
  it("should fetch data successfully", async () => {
    const { result } = renderHook(() => useFetch(fetchFunctionMock));

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.data).toBe("test data");
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("should handle fetch error and set error state", async () => {
    const errorHandlerMock = jest.fn();
    const fetchFunctionErrorMock = jest
      .fn()
      .mockRejectedValue(new Error("Test error"));

    const { result } = renderHook(() =>
      useFetch(fetchFunctionErrorMock, errorHandlerMock)
    );

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("Test error");
    expect(errorHandlerMock).toHaveBeenCalledWith("Test error");
  });
});
