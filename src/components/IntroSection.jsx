// Personal introduction section component
import PropTypes from 'prop-types'
import { resumeData } from '../data/content'

const IntroSection = ({ data }) => {
  // Use provided data or fallback to default data
  const personal = data || resumeData.personal
  return (
    <section className="intro-section">
      <h2>About Me</h2>
      <p className="intro-text">{personal.intro}</p>
    </section>
  )
}

IntroSection.propTypes = {
  data: PropTypes.object
}

export default IntroSection