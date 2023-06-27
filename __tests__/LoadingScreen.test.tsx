import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import LoadingScreen from '../src/components/reusable/LoadingScreen';

test('renders LoadingScreen component with text', () => {
  const svg = <svg data-testid="test-svg" />;
  const text = 'Loading...';

  render(<LoadingScreen svg={svg} text={text} />);

  const svgElement = screen.getByTestId('test-svg');
  expect(svgElement).toBeInTheDocument();

  const textElement = screen.getByText(text);
  expect(textElement).toBeInTheDocument();
});
