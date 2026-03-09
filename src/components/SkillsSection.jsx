// Skills section component with bilingual support
import { memo } from 'react'
import PropTypes from 'prop-types'
import { useLanguage } from '../contexts/LanguageContext'

const SkillCategory = memo(({ name, items }) => (
  <div className="skill-category">
    <h3 className="skill-category-name">{name}</h3>
    <div className="skill-items">
      {items.map((item, index) => (
        <span key={index} className="skill-item">
          {item}
        </span>
      ))}
    </div>
  </div>
))

SkillCategory.displayName = 'SkillCategory'
SkillCategory.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

const SkillsSection = memo(() => {
  const { content } = useLanguage()
  const skills = content.skills

  return (
    <section className="skills-section">
      <h2>{skills.title}</h2>
      <div className="skills-grid">
        {skills.categories.map((category, index) => (
          <SkillCategory
            key={index}
            name={category.name}
            items={category.items}
          />
        ))}
      </div>
    </section>
  )
})

SkillsSection.displayName = 'SkillsSection'

export default SkillsSection
