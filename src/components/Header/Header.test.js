import { render, screen } from "@testing-library/react";

import Header from "./Header"


test('Header link correctly', () => {
    render(<Header />)

    const headerEl = screen.getByRole('link')
    expect(headerEl).toHaveAttribute('href', 'https://www.marvel.com/')

})

test('Header logo correctly', () => {

    render(<Header />)
    const logo = screen.getByRole('img');

    expect(logo).toHaveAttribute("alt", "marvel_logo");
    expect(logo).toHaveClass("marvel_logo")
})