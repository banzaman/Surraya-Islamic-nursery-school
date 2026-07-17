import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders a button with default text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('renders a link when href is provided', async () => {
    render(
      <Button href="/about" external>
        Visit
      </Button>,
    );

    const link = screen.getByRole('link', { name: /visit/i });
    expect(link).toHaveAttribute('href', '/about');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('shows loading state and disables the button', () => {
    render(<Button loading>Loading</Button>);

    const button = screen.getByRole('button', { name: /loading/i });
    expect(button).toBeDisabled();
    expect(screen.getByRole('button')).toContainHTML('animate-spin');
  });

  it('renders an icon to the right when iconPosition is right', () => {
    render(
      <Button icon={<span data-testid="icon">★</span>} iconPosition="right">
        Star
      </Button>,
    );

    expect(screen.getByRole('button', { name: /star/i })).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
