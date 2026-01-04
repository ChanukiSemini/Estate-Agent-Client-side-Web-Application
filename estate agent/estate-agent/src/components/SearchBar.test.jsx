import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { describe, it, expect, vi } from "vitest";

describe("SearchBar Component", () => {
  //checks whether the SearchBar component shows the input box and the Search button correctly.
  it("renders search inputs and search button", () => {
    const mockSearchTerm = {
      location: "",
      type: "",
      bedrooms: "",
      year: "",
      minPrice: "",
      maxPrice: ""
    };
    
    //create a dummy function
    const mockSetSearchTerm = vi.fn();

    render(
      <SearchBar
        searchTerm={mockSearchTerm}
        setSearchTerm={mockSetSearchTerm}
      />
    );

    expect(
      screen.getByPlaceholderText("e.g. 00300,Colpetty")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /search/i })
    ).toBeInTheDocument();
  });
  
  //checks When a user types in the location input, the component reacts correctly
  it("updates location value when user types", () => {
    const mockSearchTerm = {
      location: "",
      type: "",
      bedrooms: "",
      year: "",
      minPrice: "",
      maxPrice: ""
    };

    const mockSetSearchTerm = vi.fn();

    render(
      <SearchBar
        searchTerm={mockSearchTerm}
        setSearchTerm={mockSetSearchTerm}
      />
    );

    const locationInput = screen.getByPlaceholderText(
      "e.g. 00300,Colpetty"
    );

    fireEvent.change(locationInput, {
      target: { value: "Colombo" }
    });

    expect(mockSetSearchTerm).toHaveBeenCalled();
  });

});
