import { render, screen } from '@testing-library/react';
import AcademicsPage from './page';

describe('AcademicsPage', () => {
  it('renders the academics hero and curriculum CTA', () => {
    render(<AcademicsPage />);

    expect(screen.getByRole('heading', { name: /see it for yourself/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /schedule a visit/i })).toHaveLength(2);
    expect(screen.getByRole('link', { name: /view admissions/i })).toBeInTheDocument();
  });
});
