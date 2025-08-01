// Education section component
import PropTypes from 'prop-types'
import { resumeData } from '../data/content'

const EducationSection = ({ data }) => {
  // Use provided data or fallback to default data
  const education = data || resumeData.education
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {education.map(edu => (
          <div key={edu.id} className="education-item">
            <div className="education-header">
              <h3 className="institution">{edu.institution}</h3>
              <span className="period">{edu.period}</span>
            </div>
            <p className="degree">{edu.degree} in {edu.field}</p>
            {edu.description && (
              <p className="description">{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

EducationSection.propTypes = {
  data: PropTypes.array
}

export default EducationSection