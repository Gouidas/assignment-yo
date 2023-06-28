import { useState, useEffect } from "react";

// This hook is used for sorting an array of data based on a selected key.
// It supports different sorting criteria based on the type of the selected key.
export const useSort = <T extends Object>(
  data: T[],
  defaultSortKey: keyof T,
  sortKeys: Array<keyof T>
) => {
  const [sortKey, setSortKey] = useState<keyof T>(defaultSortKey);
  const [sortedData, setSortedData] = useState<T[]>([]);

  useEffect(() => {
    let sorted;
    switch (sortKey) {
      case "name":
      case "title":
      case "character":
        sorted = [...data].sort((a, b) =>
          String(a[sortKey]).localeCompare(String(b[sortKey]))
        );
        break;
      case "release_date":
        sorted = [...data].sort(
          (a, b) =>
            new Date(String(a[sortKey])).getTime() -
            new Date(String(b[sortKey])).getTime()
        );
        break;
      case "vote_average":
      case "popularity":
        sorted = [...data].sort(
          (a, b) => Number(b[sortKey]) - Number(a[sortKey])
        );
        break;
      default:
        sorted = data;
        break;
    }
    setSortedData(sorted);
  }, [data, sortKey]);

  return { sortedData, setSortKey };
};
