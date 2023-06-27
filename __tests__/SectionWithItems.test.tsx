import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import SectionWithItems from '../src/components/reusable/SectionWithItems';
import { SectionWithItemsProps } from '../src/lib/types/SectionWithItemsProps';

test('renders SectionWithItems component with title and items', () => {
  const title = 'Section Title';
  const items = [
    { id: 1, type: 'chip' as const, name: 'Item 1' },
    { id: 2, type: 'image' as const, name: 'Item 2', logo_path: '/path/to/image.png' },
  ] as SectionWithItemsProps['items'];
  const selectedColor = '#ff0000';

  render(<SectionWithItems title={title} items={items} selectedColor={selectedColor} />);

  // Assert that the title is rendered
  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();

  // Assert that the items are rendered
  const item1Element = screen.getByText('Item 1');
  expect(item1Element).toBeInTheDocument();

  const item2Element = screen.getByAltText('Item 2');
  expect(item2Element).toBeInTheDocument();
});
