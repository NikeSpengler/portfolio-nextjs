import { expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from "../components/Footer";
 
describe('Footer', () => {
  it('Should render the full text', () => {

    render(<Footer />);

    const message = screen.queryByText(/Made by/i);
    expect(message).toBeDefined();
  })
})