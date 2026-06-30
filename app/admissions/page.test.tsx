import { render, screen } from '@testing-library/react';
import AdmissionsPage from './page';

describe('AdmissionsPage', () => {
  it('renders the admissions hero and eligibility section', () => {
    render(<AdmissionsPage />);

    expect(screen.getByRole('heading', { name: /embark on a journey of faith/i })).toBeInTheDocument();
    expect(screen.getByText(/nursery one, two & three/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /apply now online/i })).toBeInTheDocument();
  });
});
