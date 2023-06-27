import { getMovieDetails } from "../src/api/tmdb";
import { fetchAndUpdateDetails } from "../src/lib/hooks/fetchAndUpdateDetails";

jest.mock("../src/api/tmdb", () => ({
  getMovieDetails: jest.fn(),
}));

describe("fetchAndUpdateDetails", () => {
  it("fetches and updates movie details", async () => {
    const movieId = 123;
    const details = { /* mock movie details */ };
    (getMovieDetails as jest.Mock).mockResolvedValue(details);

    const setItemMock = jest.spyOn(Storage.prototype, "setItem");

    const result = await fetchAndUpdateDetails(movieId);

    expect(getMovieDetails).toHaveBeenCalledWith(movieId);
    expect(setItemMock).toHaveBeenCalledWith(
      `movie-${movieId}`,
      expect.stringMatching(/"timestamp":\s*\d+/)
    );
    expect(result).toEqual(details);
  });

});
