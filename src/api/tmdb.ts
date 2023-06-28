import axios, { AxiosInstance } from "axios";

import { Movie } from "../lib/types/Movie";
import { Actor } from "../lib/types/Actor";
import {
  API_KEY,
  BASE_URL,
  UPCOMING_URL,
  MOVIE_DETAILS_URL,
  ACTORS_URL,
} from "../lib/constants";

// Define headers upfront to make sure each request includes the necessary information
const HEADERS = {
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json;charset=utf-8",
};

// Create an Axios instance pre-configured with the base URL and headers to be used for all API requests
const client: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
});

// Cache for storing fetched movie details to avoid redundant network requests
let movieDetailsCache: { [id: number]: Movie } = {};

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  // Fetching upcoming movies from the API
  try {
    const response = await client.get(UPCOMING_URL);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async (id: number): Promise<Movie> => {
  // Fetching movie details and storing it in cache for future use
  try {
    if (movieDetailsCache[id]) {
      return movieDetailsCache[id];
    }

    const response = await client.get(`${MOVIE_DETAILS_URL}/${id}`);

    movieDetailsCache[id] = response.data;
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getActors = async (id: number): Promise<Actor[]> => {
  // Fetching actors related to a specific movie
  try {
    const response = await client.get(
      `${MOVIE_DETAILS_URL}/${id}${ACTORS_URL}`
    );
    const { cast } = response.data;
    return cast.map((actor: Actor) => ({ ...actor, cast: [actor] }));
  } catch (error) {
    throw error;
  }
};

export const getMovieVideos = async (id: string): Promise<any> => {
  // Fetching videos related to a specific movie
  try {
    const response = await client.get(`/movie/${id}/videos`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
