// Languages section component
import PropTypes from 'prop-types'

const LanguagesSection = ({ data }) => {
  // Use provided data or fallback to empty array
  const languages = data || []
  
  if (!languages.length) {
    return null // Don't render if no languages
  }
  
  return (
    <section className="languages-section">
      <h2>Languages</h2>
      <div className="languages-list">
        {languages.map((language, index) => (
          <div key={index} className="language-item">
            <span className="language-icon">🌐</span>
            <span className="language-text">{language}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

LanguagesSection.propTypes = {
  data: PropTypes.array
}

export default LanguagesSection