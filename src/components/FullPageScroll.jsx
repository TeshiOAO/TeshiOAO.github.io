// Full page scroll container component
import { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import './FullPageScroll.css'

const FullPageScroll = ({ children, navigationDots = true }) => {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const containerRef = useRef(null)
  const touchStartY = useRef(0)
  const sections = Array.isArray(children) ? children : [children]

  // Scroll to specific section
  const scrollToSection = useCallback((index) => {
    if (index < 0 || index >= sections.length || isScrolling) return

    setIsScrolling(true)
    setCurrentSection(index)

    // Reset scrolling lock after animation completes
    setTimeout(() => {
      setIsScrolling(false)
    }, 1000)
  }, [sections.length, isScrolling])

  // Handle wheel event for mouse scroll
  const handleWheel = useCallback((e) => {
    if (isScrolling) return

    const currentSectionElement = containerRef.current?.querySelector(
      `.fullpage-section:nth-child(${currentSection + 1})`
    )

    if (!currentSectionElement) return

    const { scrollTop, scrollHeight, clientHeight } = currentSectionElement
    const isAtTop = scrollTop === 0
    const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1

    // Only switch sections if at the edge of current section
    if (e.deltaY > 0 && isAtBottom) {
      // Scroll down to next section
      e.preventDefault()
      scrollToSection(currentSection + 1)
    } else if (e.deltaY < 0 && isAtTop) {
      // Scroll up to previous section
      e.preventDefault()
      scrollToSection(currentSection - 1)
    }
  }, [currentSection, isScrolling, scrollToSection])

  // Handle touch events for mobile
  const handleTouchStart = useCallback((e) => {
    touchStartY.current = e.touches[0].clientY
  }, [])

  const handleTouchEnd = useCallback((e) => {
    if (isScrolling) return

    const currentSectionElement = containerRef.current?.querySelector(
      `.fullpage-section:nth-child(${currentSection + 1})`
    )

    if (!currentSectionElement) return

    const { scrollTop, scrollHeight, clientHeight } = currentSectionElement
    const isAtTop = scrollTop === 0
    const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1

    const touchEndY = e.changedTouches[0].clientY
    const diff = touchStartY.current - touchEndY

    // Threshold for swipe detection
    if (Math.abs(diff) > 50) {
      if (diff > 0 && isAtBottom) {
        // Swipe up - scroll down to next section
        scrollToSection(currentSection + 1)
      } else if (diff < 0 && isAtTop) {
        // Swipe down - scroll up to previous section
        scrollToSection(currentSection - 1)
      }
    }
  }, [currentSection, isScrolling, scrollToSection])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (isScrolling) return

    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault()
        scrollToSection(currentSection + 1)
        break
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault()
        scrollToSection(currentSection - 1)
        break
      case 'Home':
        e.preventDefault()
        scrollToSection(0)
        break
      case 'End':
        e.preventDefault()
        scrollToSection(sections.length - 1)
        break
      default:
        break
    }
  }, [currentSection, isScrolling, scrollToSection, sections.length])

  // Add event listeners
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleWheel, handleTouchStart, handleTouchEnd, handleKeyDown])

  return (
    <div ref={containerRef} className="fullpage-container">
      <div
        className="fullpage-wrapper"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >
        {sections.map((section, index) => (
          <div key={index} className="fullpage-section">
            {section}
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      {navigationDots && (
        <nav className="fullpage-nav" aria-label="Page navigation">
          {sections.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentSection ? 'active' : ''}`}
              onClick={() => scrollToSection(index)}
              aria-label={`Go to section ${index + 1}`}
              aria-current={index === currentSection ? 'true' : 'false'}
            />
          ))}
        </nav>
      )}

      {/* Scroll hint for first section */}
      {currentSection === 0 && (
        <div className="scroll-hint">
          <div className="scroll-arrow">↓</div>
          <span>Scroll to explore</span>
        </div>
      )}
    </div>
  )
}

FullPageScroll.propTypes = {
  children: PropTypes.node.isRequired,
  navigationDots: PropTypes.bool
}

export default FullPageScroll
