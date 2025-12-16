// Basic tests for App component
import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'

// Mock the data loader to ensure tests are predictable
vi.mock('../utils/dataLoader', () => ({
  loadResumeData: vi.fn(() => Promise.resolve({
    personal: {
      name: "Test User",
      title: "Test Title",
      intro: "Test introduction",
      photo: null
    },
    contact: {
      email: "test@example.com"
    },
    languages: [],
    education: [],
    experiences: [],
    projects: []
  }))
}))

describe('App Component', () => {
  it('renders all main sections', async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen.getByText('About Me')).toBeInTheDocument()
    })
    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByText('Special Experiences')).toBeInTheDocument()
    expect(screen.getByText('Project Experience')).toBeInTheDocument()
  })

  it('renders personal information from data', async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen.getByText('Test User')).toBeInTheDocument()
    })
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test introduction')).toBeInTheDocument()
  })
})