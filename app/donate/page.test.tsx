import { render, screen } from '@testing-library/react';
import DonatePage from './page';

describe('DonatePage', () => {
  it('renders the donate hero and CTA buttons', () => {
    render(<DonatePage />);

    expect(screen.getByRole('heading', { name: /support our mission/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /donate now/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /talk to us first/i })).toBeInTheDocument();
  });
});
