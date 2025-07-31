// Education section component
import { resumeData } from '../data/content'

const EducationSection = () => {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {resumeData.education.map(edu => (
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

export default EducationSection