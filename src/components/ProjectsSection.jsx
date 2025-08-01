// Project experience section component
import PropTypes from 'prop-types'
import { resumeData } from '../data/content'

const ProjectsSection = ({ data }) => {
  // Use provided data or fallback to default data
  const projects = data || resumeData.projects
  return (
    <section className="projects-section">
      <h2>Project Experience</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <div className="project-header">
              <h3 className="project-title">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <span className="period">{project.period}</span>
            </div>
            <p className="description">{project.description}</p>
            
            {project.technologies && project.technologies.length > 0 && (
              <div className="technologies">
                <span className="tech-label">Technologies:</span>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            )}
            
            {project.highlights && project.highlights.length > 0 && (
              <ul className="highlights">
                {project.highlights.map((highlight, index) => (
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

ProjectsSection.propTypes = {
  data: PropTypes.array
}

export default ProjectsSection