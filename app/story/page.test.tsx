import { render, screen } from '@testing-library/react';
import StoryPage from './page';

describe('StoryPage', () => {
  it('renders the story sections and call to action', () => {
    render(<StoryPage />);

    expect(screen.getByRole('heading', { name: /our story/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /director's message/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /our sponsors/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /support us/i })).toBeInTheDocument();
  });
});
