// A utility function that calculates how many columns should be displayed based on the window size,
// card width, gap between cards and padding on the page. This function is used by the useColumnCount
// custom hook to adjust the column count when window size changes.
export const calculateColumns = (
  windowWidth: number,
  cardWidth: number,
  gapWidth: number,
  totalPadding: number
) => {
  return Math.floor((windowWidth - totalPadding) / (cardWidth + gapWidth));
};
