import { expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from "../components/Hero"

describe('Hero', () => {
    it('Should render title', () => {
  
      render(<Hero/>);
  
      const message = screen.queryByText(/Frontend Developer/i);
      expect(message).toBeDefined();
    })
  })