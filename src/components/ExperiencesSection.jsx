// Special experiences section component
import { resumeData } from '../data/content'

const ExperiencesSection = () => {
  return (
    <section className="experiences-section">
      <h2>Special Experiences</h2>
      <div className="experiences-list">
        {resumeData.experiences.map(exp => (
          <div key={exp.id} className="experience-item">
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
        ))}
      </div>
    </section>
  )
}

export default ExperiencesSection