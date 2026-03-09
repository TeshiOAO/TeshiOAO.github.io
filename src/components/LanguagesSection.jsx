// Languages section component with performance optimizations
import { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import { languagesShape } from '../types/propTypes'

// Memoized language item component
const LanguageItem = memo(({ language }) => (
  <div className="language-item">
    <span className="language-icon" role="img" aria-label="Language icon">
      🌐
    </span>
    <span className="language-text">{language}</span>
  </div>
))

LanguageItem.displayName = 'LanguageItem'
LanguageItem.propTypes = {
  language: PropTypes.string.isRequired
}

// Main component optimized with React.memo
const LanguagesSection = memo(({ data }) => {
  // Use provided data or fallback to empty array
  const languages = data || []

  // Memoize empty check to prevent unnecessary re-renders
  const hasLanguages = useMemo(() => languages.length > 0, [languages.length])

  // Early return if no languages
  if (!hasLanguages) {
    return null
  }

  return (
    <section className="languages-section">
      <h2>Languages</h2>
      <div className="languages-list">
        {languages.map((language, index) => (
          <LanguageItem key={`${language}-${index}`} language={language} />
        ))}
      </div>
    </section>
  )
})

LanguagesSection.displayName = 'LanguagesSection'

// Improved PropTypes validation
LanguagesSection.propTypes = {
  data: languagesShape
}

export default LanguagesSection