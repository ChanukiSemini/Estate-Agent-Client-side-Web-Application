import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PropertyCard from './PropertyCard';

const mockProperty = {
  id: 1,
  type: 'House',
  bedrooms: 3,
  price: 5000000,
  tenure: 'Freehold',
  location: 'Colombo',
  description: 'Nice house',
  thumbnail: 'house.jpg',
  added: {
    month: 'Jan ',
    day: '01 ',
    year: 2024
  }
};

describe('PropertyCard component', () => {

  it('renders property details', () => {
    render(
      <BrowserRouter>
        <PropertyCard
          property={mockProperty}
          addToFavourites={vi.fn()}
        />
      </BrowserRouter>
    );

    expect(screen.getByText(/rs\./i)).toBeInTheDocument();
    expect(screen.getByText('House')).toBeInTheDocument();
    expect(screen.getByText('Colombo')).toBeInTheDocument();
    expect(screen.getByText('3 Bedrooms')).toBeInTheDocument();
  });

  it('renders "Add to Favourite" button', () => {
    render(
      <BrowserRouter>
        <PropertyCard
          property={mockProperty}
          addToFavourites={vi.fn()}
        />
      </BrowserRouter>
    );

    expect(
      screen.getByRole('button', { name: /add to favourite/i })
    ).toBeInTheDocument();
  });

  it('renders "view property" link', () => {
    render(
      <BrowserRouter>
        <PropertyCard
          property={mockProperty}
          addToFavourites={vi.fn()}
        />
      </BrowserRouter>
    );

    expect(
      screen.getByRole('link', { name: /view property/i })
    ).toBeInTheDocument();
  });

});
