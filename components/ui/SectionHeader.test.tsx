import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionHeader } from './SectionHeader';

describe('SectionHeader', () => {
  it('renders title, subtitle, and eyebrow text', () => {
    render(
      <SectionHeader
        eyebrow="Overview"
        title="Welcome"
        subtitle="This is the subtitle"
      />,
    );

    expect(screen.getByText(/overview/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /welcome/i })).toBeInTheDocument();
    expect(screen.getByText(/this is the subtitle/i)).toBeInTheDocument();
  });

  it('renders without subtitle when none is provided', () => {
    render(<SectionHeader title="Only Title" />);
    expect(screen.getByRole('heading', { name: /only title/i })).toBeInTheDocument();
    expect(screen.queryByText(/subtitle/i)).not.toBeInTheDocument();
  });
});
