import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  it('renders children inside the card', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText(/card content/i)).toBeInTheDocument();
  });

  it('renders with a custom element type when as is provided', () => {
    render(<Card as="section">Section content</Card>);
    expect(screen.getByText(/section content/i).closest('section')).toBeInTheDocument();
  });
});
