import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Gallery from './Gallery';

describe('Gallery component', () => {

  it('renders Gallery component without crashing', () => {
    render(
      <Gallery
        searchTerm={{}}
        favourites={[]}
        setFavourites={vi.fn()}
      />
    );

    // Check the empty result message exists
    expect(
      screen.getByText(/no properties found/i)
    ).toBeInTheDocument();
  });

  it('renders Favourites sidebar', () => {
    render(
      <Gallery
        searchTerm={{}}
        favourites={[]}
        setFavourites={vi.fn()}
      />
    );

    // Sidebar heading
    expect(
      screen.getByRole('heading', { name: /favourites/i })
    ).toBeInTheDocument();
  });

});
