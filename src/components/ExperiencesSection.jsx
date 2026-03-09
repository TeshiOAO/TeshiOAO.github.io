// Special experiences section component with picture space and performance optimizations
import { memo, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { experienceShape } from '../types/propTypes'
import { useLanguage } from '../contexts/LanguageContext'

// Memoized experience image component with error handling
const ExperienceImage = memo(({ image, title }) => {
  const [imageError, setImageError] = useState(false)

  const handleImageError = useCallback(() => {
    setImageError(true)
  }, [])

  if (imageError) {
    return null
  }

  return (
    <div className="experience-picture">
      <img
        src={image}
        alt={`${title} experience`}
        onError={handleImageError}
        loading="lazy"
      />
    </div>
  )
})

ExperienceImage.displayName = 'ExperienceImage'
ExperienceImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

// Memoized experience item component
const ExperienceItem = memo(({ experience }) => (
  <div className="experience-item">
    <div className="experience-content">
      <div className="experience-text">
        <div className="experience-header">
          <h3 className="experience-title">{experience.title}</h3>
          {experience.period && <span className="period">{experience.period}</span>}
        </div>
        {experience.organization && (
          <p className="organization">{experience.organization}</p>
        )}
        {experience.description && (
          <p className="description">{experience.description}</p>
        )}
        {experience.highlights && experience.highlights.length > 0 && (
          <ul className="highlights">
            {experience.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
      {experience.image && (
        <ExperienceImage image={experience.image} title={experience.title} />
      )}
    </div>
  </div>
))

ExperienceItem.displayName = 'ExperienceItem'
ExperienceItem.propTypes = {
  experience: experienceShape.isRequired
}

// Main component optimized with React.memo
const ExperiencesSection = memo(({ data }) => {
  const { content } = useLanguage()

  // Use provided data or fallback to content data
  const experiences = data || content.experiences

  // Early return if no experiences
  if (!experiences || experiences.length === 0) {
    return null
  }

  return (
    <section className="experiences-section">
      <h2>{content.navigation.experience}</h2>
      <div className="experiences-list">
        {experiences.map(exp => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  )
})

ExperiencesSection.displayName = 'ExperiencesSection'

// Improved PropTypes validation
ExperiencesSection.propTypes = {
  data: PropTypes.arrayOf(experienceShape)
}

export default ExperiencesSection