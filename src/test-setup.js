// Test setup for Vitest
import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

// Add custom matchers
expect.extend(matchers)

// Clean up after each test
afterEach(() => {
  cleanup()
})

// Make vi globally available
global.vi = vi