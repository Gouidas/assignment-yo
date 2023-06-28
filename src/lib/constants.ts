export const API_KEY = process.env.REACT_APP_API_KEY;
export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const UPCOMING_URL = "/movie/upcoming";
export const MOVIE_DETAILS_URL = "/movie";
export const ACTORS_URL = "/credits";
export const MOVIES_SORTING_LIST = [
  "title",
  "release_date",
  "vote_average",
  "popularity",
];
export const colors = ["#E50914", "#36a845", "#3e7aff", "#E87C03"];

export const ACTOR_SORT_OPTIONS = ["name", "character", "popularity"] as const;

export enum MovieSortOptions {
  RELEASE_DATE = "release_date",
  TITLE = "title",
  VOTE_AVERAGE = "vote_average",
  POPULARITY = "popularity",
}

export const MOVIE_SORT_OPTIONS = [
  { value: MovieSortOptions.RELEASE_DATE, label: "Release date" },
  { value: MovieSortOptions.TITLE, label: "Title" },
  { value: MovieSortOptions.VOTE_AVERAGE, label: "Average vote" },
  { value: MovieSortOptions.POPULARITY, label: "Popularity" },
];
