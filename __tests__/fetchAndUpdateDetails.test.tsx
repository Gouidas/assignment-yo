import { getMovieDetails } from "../src/api/tmdb";
import { fetchAndUpdateDetails } from "../src/lib/hooks/fetchAndUpdateDetails";

jest.mock("../src/api/tmdb", () => ({
  getMovieDetails: jest.fn(),
}));

describe("fetchAndUpdateDetails", () => {
  it("fetches and updates movie details", async () => {
    // Mock the response from the API
    const movieId = 123;
    const details = { /* mock movie details */ };
    (getMovieDetails as jest.Mock).mockResolvedValue(details);

    // Mock localStorage.setItem
    const setItemMock = jest.spyOn(Storage.prototype, "setItem");

    // Call the fetchAndUpdateDetails function
    const result = await fetchAndUpdateDetails(movieId);

    // Assert the expected behavior
    expect(getMovieDetails).toHaveBeenCalledWith(movieId);
    expect(setItemMock).toHaveBeenCalledWith(
      `movie-${movieId}`,
      expect.stringMatching(/"timestamp":\s*\d+/)
    );
    expect(result).toEqual(details);
  });

  // Add more test cases for error scenarios if needed
});
