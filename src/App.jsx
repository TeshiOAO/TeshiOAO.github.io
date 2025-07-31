// Main application component
import './App.css'
import PhotoSection from './components/PhotoSection'
import IntroSection from './components/IntroSection'
import EducationSection from './components/EducationSection'
import ExperiencesSection from './components/ExperiencesSection'
import ProjectsSection from './components/ProjectsSection'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Resume Portfolio</h1>
        <p>Minimalist • High-end • Design-driven</p>
      </header>
      
      <main className="main-content">
        <PhotoSection />
        <IntroSection />
        <EducationSection />
        <ExperiencesSection />
        <ProjectsSection />
      </main>
    </div>
  )
}

export default App