import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the extended matchers
import LoadingScreen from '../src/components/reusable/LoadingScreen';

test('renders LoadingScreen component with text', () => {
  const svg = <svg data-testid="test-svg" />;
  const text = 'Loading...';

  render(<LoadingScreen svg={svg} text={text} />);

  // Assert that the SVG element is rendered
  const svgElement = screen.getByTestId('test-svg');
  expect(svgElement).toBeInTheDocument();

  // Assert that the text is rendered
  const textElement = screen.getByText(text);
  expect(textElement).toBeInTheDocument();
});
