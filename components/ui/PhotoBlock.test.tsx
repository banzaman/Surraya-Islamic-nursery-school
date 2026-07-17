import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PhotoBlock } from './PhotoBlock';

describe('PhotoBlock', () => {
  it('renders an image when imageSrc is provided', () => {
    render(
      <PhotoBlock
        imageSrc="/photo.jpg"
        imageAlt="A beautiful scene"
        label="Sample photo"
      />,
    );

    const image = screen.getByRole('img', { name: /a beautiful scene/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/photo.jpg');
  });

  it('renders a placeholder when no imageSrc is provided', () => {
    render(<PhotoBlock label="No photo available" />);

    expect(screen.getByRole('img', { name: /no photo available/i })).toBeInTheDocument();
    expect(screen.getByText(/no photo available/i)).toBeInTheDocument();
  });
});
