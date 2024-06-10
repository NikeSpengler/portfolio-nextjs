import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from "../components/Footer";
 
test('Page', () => {
  render(<Footer />)
  expect(screen.getByRole('text', { level: 1, name: 'Made by' })).toBeDefined()
})