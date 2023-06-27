import { renderHook } from "@testing-library/react-hooks";
import { useSort } from "../src/lib/hooks/useSort";

describe("useSort", () => {
  const data = [
    { name: "Alice", age: 25 },
    { name: "John", age: 30 },
    { name: "Bob", age: 35 },
  ];

  it("should sort the data based on the provided sort key", () => {
    const { result } = renderHook(() =>
      useSort(data, "name", ["name", "age"])
    );

    expect(result.current.sortedData).toEqual([
      { name: "Alice", age: 25 },
      { name: "Bob", age: 35 },
      { name: "John", age: 30 },
    ]);
  });

  it("should not modify the original data array", () => {
    const { result } = renderHook(() =>
      useSort(data, "name", ["name", "age"])
    );

    expect(result.current.sortedData).not.toBe(data);
  });
});

