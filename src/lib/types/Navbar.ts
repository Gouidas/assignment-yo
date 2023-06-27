export interface NavbarTypes {
  setSortKey: (
    value: "release_date" | "title" | "vote_average" | "popularity"
  ) => void;
  selectedColor: string;
}
