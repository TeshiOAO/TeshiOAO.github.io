// Special experiences section component with picture space
import PropTypes from 'prop-types'
import { resumeData } from '../data/content'

const ExperiencesSection = ({ data }) => {
  // Use provided data or fallback to default data
  const experiences = data || resumeData.experiences
  
  return (
    <section className="experiences-section">
      <h2>Special Experiences</h2>
      <div className="experiences-list">
        {experiences.map(exp => (
          <div key={exp.id} className="experience-item">
            <div className="experience-content">
              <div className="experience-text">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="organization">{exp.organization}</p>
                <p className="description">{exp.description}</p>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="highlights">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="experience-picture">
                {exp.image ? (
                  <img src={exp.image} alt={`${exp.title} experience`} />
                ) : (
                  <div className="picture-placeholder">
                    <span>📸</span>
                    <p>Experience Photo</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

ExperiencesSection.propTypes = {
  data: PropTypes.array
}

export default ExperiencesSection