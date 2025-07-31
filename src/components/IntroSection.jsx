// Personal introduction section component
import { resumeData } from '../data/content'

const IntroSection = () => {
  return (
    <section className="intro-section">
      <h2>About Me</h2>
      <p className="intro-text">{resumeData.personal.intro}</p>
    </section>
  )
}

export default IntroSection