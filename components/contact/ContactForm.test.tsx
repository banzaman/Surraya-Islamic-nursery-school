import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ContactForm } from './ContactForm';

describe('ContactForm', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows validation errors when submitting empty form', async () => {
    render(<ContactForm />);
    await userEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText(/full name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email address is required/i)).toBeInTheDocument();
    expect(screen.getByText(/please select a subject/i)).toBeInTheDocument();
    expect(screen.getByText(/message cannot be empty/i)).toBeInTheDocument();
  });

  it('submits successfully and shows success message', async () => {
    render(<ContactForm />);

    await userEvent.type(screen.getByLabelText(/full name/i), 'Aisha Kamau');
    await userEvent.type(screen.getByLabelText(/email address/i), 'aisha@example.com');
    await userEvent.selectOptions(screen.getByLabelText(/subject/i), 'General Enquiry');
    await userEvent.type(screen.getByLabelText(/message/i), 'Hello there');

    await userEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/message received/i)).toBeInTheDocument();
    });

    expect(screen.getByRole('button', { name: /send another message/i })).toBeInTheDocument();
  });
});
