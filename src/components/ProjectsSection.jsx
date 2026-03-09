// Project experience section component with performance optimizations
import { memo } from 'react'
import PropTypes from 'prop-types'
import { projectShape } from '../types/propTypes'
import { useLanguage } from '../contexts/LanguageContext'

// Memoized project item component for better performance
const ProjectItem = memo(({ project }) => (
  <div className="project-item">
    <div className="project-header">
      <h3 className="project-title">{project.title}</h3>
      {project.period && <span className="period">{project.period}</span>}
    </div>

    {project.description && (
      <p className="description">{project.description}</p>
    )}

    {project.technologies && project.technologies.length > 0 && (
      <div className="technologies">
        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    )}

    {project.link && (
      <div className="project-link">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
          aria-label={`View ${project.title} project`}
        >
          VIEW PROJECT →
        </a>
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
))

ProjectItem.displayName = 'ProjectItem'
ProjectItem.propTypes = {
  project: projectShape.isRequired
}

// Main component optimized with React.memo
const ProjectsSection = memo(({ data }) => {
  const { content } = useLanguage()

  // Use provided data or fallback to content data
  const projects = data || content.projects

  // Early return if no projects
  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <section className="projects-section">
      <h2>{content.navigation.projects}</h2>
      <div className="projects-list">
        {projects.map(project => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
})

ProjectsSection.displayName = 'ProjectsSection'

// Improved PropTypes validation
ProjectsSection.propTypes = {
  data: PropTypes.arrayOf(projectShape)
}

export default ProjectsSection