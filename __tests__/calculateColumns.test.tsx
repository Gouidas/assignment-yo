import { calculateColumns } from "../src/lib/hooks/calculateColumns";

describe("calculateColumns", () => {
  it("returns the correct number of columns", () => {
    // Define the input values
    const windowWidth = 1000;
    const cardWidth = 200;
    const gapWidth = 20;
    const totalPadding = 40;

    // Call the calculateColumns function
    const columns = calculateColumns(
      windowWidth,
      cardWidth,
      gapWidth,
      totalPadding
    );

    // Assert the expected result
    expect(columns).toBe(4); // The expected number of columns based on the provided input
  });

  // Add more test cases for different scenarios if needed
});
