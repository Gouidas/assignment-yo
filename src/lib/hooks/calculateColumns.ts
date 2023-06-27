export const calculateColumns = (
  windowWidth: number,
  cardWidth: number,
  gapWidth: number,
  totalPadding: number
) => {
  return Math.floor((windowWidth - totalPadding) / (cardWidth + gapWidth));
};
