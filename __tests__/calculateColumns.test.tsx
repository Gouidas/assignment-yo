import { calculateColumns } from "../src/lib/hooks/calculateColumns";

describe("calculateColumns", () => {
  it("returns the correct number of columns", () => {
    const windowWidth = 1000;
    const cardWidth = 200;
    const gapWidth = 20;
    const totalPadding = 40;

    const columns = calculateColumns(
      windowWidth,
      cardWidth,
      gapWidth,
      totalPadding
    );

    expect(columns).toBe(4); 
  });
});
