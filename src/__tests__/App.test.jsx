// Basic tests for App component
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

// Mock the content data to ensure tests are predictable
vi.mock('../data/content', () => ({
  resumeData: {
    personal: {
      name: "Test User",
      title: "Test Title",
      intro: "Test introduction",
      photo: null
    },
    education: [],
    experiences: [],
    projects: []
  }
}))

describe('App Component', () => {
  it('renders the main header', () => {
    render(<App />)
    expect(screen.getByText('Resume Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Minimalist • High-end • Design-driven')).toBeInTheDocument()
  })

  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByText('Special Experiences')).toBeInTheDocument()
    expect(screen.getByText('Project Experience')).toBeInTheDocument()
  })

  it('renders personal information from data', () => {
    render(<App />)
    expect(screen.getByText('Test User')).toBeInTheDocument()
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test introduction')).toBeInTheDocument()
  })
})