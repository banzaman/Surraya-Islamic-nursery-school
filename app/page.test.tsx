import { render, screen } from '@testing-library/react';
import HomePage from './page';

describe('HomePage', () => {
  it('renders the hero and gallery sections', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { name: /building/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /apply for admission/i })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /view all photos/i })).toHaveLength(2);
  });
});
