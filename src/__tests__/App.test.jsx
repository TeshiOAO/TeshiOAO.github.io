// Updated tests for App component with bilingual support
import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  it('renders main sections in Chinese (default)', async () => {
    render(<App />)

    await waitFor(() => {
      expect(screen.getByText('黃瀚')).toBeInTheDocument()
    })

    expect(screen.getByText('軟體工程師')).toBeInTheDocument()
    expect(screen.getByText('hankhank135@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('關於我')).toBeInTheDocument()
  })

  it('renders language toggle button', async () => {
    render(<App />)

    await waitFor(() => {
      const toggleButton = screen.getByLabelText(/Switch to/i)
      expect(toggleButton).toBeInTheDocument()
    })
  })

  it('renders full page scroll navigation', async () => {
    render(<App />)

    await waitFor(() => {
      const navDots = document.querySelectorAll('.nav-dot')
      expect(navDots.length).toBeGreaterThan(0)
    })
  })
})
