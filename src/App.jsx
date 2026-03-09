// Main application component with bilingual support and full page scroll
import { useState, useEffect, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import ErrorBoundary from './components/ErrorBoundary'
import FullPageScroll from './components/FullPageScroll'
import LanguageToggle from './components/LanguageToggle'
import LanguagesSection from './components/LanguagesSection'
import EducationSection from './components/EducationSection'
import ExperiencesSection from './components/ExperiencesSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'

// Memoized hero photo component with error handling
const HeroPhoto = ({ photo, name }) => {
  const [imageError, setImageError] = useState(false)

  const handleImageError = useCallback(() => {
    setImageError(true)
  }, [])

  const initials = useMemo(() => {
    return name?.split(' ').map(n => n[0]).join('') || 'HH'
  }, [name])

  if (!photo || imageError) {
    return (
      <div className="photo-placeholder-large">
        {initials}
      </div>
    )
  }

  return (
    <img
      src={photo}
      alt={name || 'Profile'}
      className="profile-photo-large"
      onError={handleImageError}
      loading="eager"
    />
  )
}

HeroPhoto.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string
}

// Main app content component (separated for language context access)
const AppContent = () => {
  const { content } = useLanguage()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="app">
        <div className="loading">Loading resume...</div>
      </div>
    )
  }

  const personal = content.personal
  const contact = content.contact

  return (
    <div className="app">
      {/* Language toggle button */}
      <LanguageToggle />

      {/* Full page scroll sections */}
      <FullPageScroll>
        {/* Section 1: Hero - About Me */}
        <section className="hero-section">
          <div className="hero-content">
            {/* Photo Section */}
            <div className="hero-photo">
              <div className="photo-container-large">
                <HeroPhoto photo={personal?.photo} name={personal?.name} />
              </div>
            </div>

            {/* Personal Info and Contact */}
            <div className="hero-info">
              <div className="hero-text">
                <h1 className="hero-name">{personal?.name}</h1>
                <p className="hero-title">{personal?.title}</p>

                {/* Contact Information */}
                {contact?.email && (
                  <div className="hero-contact">
                    <div className="hero-contact-item">
                      <span className="contact-icon" role="img" aria-label="Email icon">
                        📧
                      </span>
                      <a
                        href={`mailto:${contact.email}`}
                        className="hero-contact-link"
                        aria-label={`Email ${contact.email}`}
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* About Me */}
              <div className="hero-about">
                <h2 className="hero-about-title">{content.navigation.about}</h2>
                <p className="hero-about-text">{personal?.intro}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Education */}
        <section className="fullpage-content-section">
          <div className="main-content">
            <EducationSection data={content.education} />
            <LanguagesSection data={content.languages} />
          </div>
        </section>

        {/* Section 3: Experience */}
        <section className="fullpage-content-section">
          <div className="main-content">
            <ExperiencesSection data={content.experiences} />
          </div>
        </section>

        {/* Section 4: Projects */}
        <section className="fullpage-content-section">
          <div className="main-content">
            <ProjectsSection data={content.projects} />
          </div>
        </section>

        {/* Section 5: Skills */}
        <section className="fullpage-content-section">
          <div className="main-content">
            <SkillsSection />
          </div>
        </section>
      </FullPageScroll>
    </div>
  )
}

// Main App component with providers
function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ErrorBoundary>
  )
}

export default App
