// Education section component with performance optimizations
import { memo } from 'react'
import PropTypes from 'prop-types'
import { educationShape } from '../types/propTypes'
import { useLanguage } from '../contexts/LanguageContext'

// Optimized with React.memo to prevent unnecessary re-renders
const EducationSection = memo(({ data }) => {
  const { content } = useLanguage()

  // Early return if no education data
  if (!data || data.length === 0) {
    return null
  }

  const education = data

  return (
    <section className="education-section">
      <h2>{content.navigation.education}</h2>
      <div className="education-list">
        {education.map(edu => (
          <div key={edu.id} className="education-item">
            <div className="education-header">
              <h3 className="institution">{edu.institution}</h3>
              {edu.period && <span className="period">{edu.period}</span>}
            </div>
            {edu.degree && edu.field && (
              <p className="degree">{edu.degree} in {edu.field}</p>
            )}
            {edu.description && (
              <p className="description">{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
})

// Display name for debugging
EducationSection.displayName = 'EducationSection'

// Improved PropTypes with specific shape validation
EducationSection.propTypes = {
  data: PropTypes.arrayOf(educationShape)
}

export default EducationSection