// Main application component with dynamic data loading and emphasized hero section
import { useState, useEffect } from 'react'
import './App.css'
import LanguagesSection from './components/LanguagesSection'
import EducationSection from './components/EducationSection'
import ExperiencesSection from './components/ExperiencesSection'
import ProjectsSection from './components/ProjectsSection'
import { loadResumeData } from './utils/dataLoader'

function App() {
  const [resumeData, setResumeData] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load resume data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await loadResumeData()
        setResumeData(data)
      } catch (error) {
        console.error('Error loading resume data:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadData()
  }, [])
  
  if (loading) {
    return (
      <div className="app">
        <div className="loading">Loading resume...</div>
      </div>
    )
  }

  const personal = resumeData?.personal
  const contact = resumeData?.contact

  return (
    <div className="app">
      {/* Hero Section - Emphasized Photo, Contact, and About Me */}
      <section className="hero-section">
        <div className="hero-content">
          {/* Photo Section - Emphasized */}
          <div className="hero-photo">
            <div className="photo-container-large">
              {personal?.photo ? (
                <img 
                  src={personal.photo} 
                  alt={personal?.name || 'Profile'}
                  className="profile-photo-large"
                />
              ) : (
                <div className="photo-placeholder-large">
                  {personal?.name?.split(' ').map(name => name[0]).join('') || 'HH'}
                </div>
              )}
            </div>
          </div>
          
          {/* Personal Info and Contact - Emphasized */}
          <div className="hero-info">
            <div className="hero-text">
              <h1 className="hero-name">{personal?.name || 'Han Huang'}</h1>
              <p className="hero-title">{personal?.title || 'Computer Science Graduate Student'}</p>
              
              {/* Contact Information - Emphasized */}
              {contact?.email && (
                <div className="hero-contact">
                  <div className="hero-contact-item">
                    <span className="contact-icon">📧</span>
                    <a href={`mailto:${contact.email}`} className="hero-contact-link">
                      {contact.email}
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* About Me - Emphasized */}
            <div className="hero-about">
              <h2 className="hero-about-title">About Me</h2>
              <p className="hero-about-text">
                {personal?.intro || 'Passionate computer science graduate with expertise in software development.'}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Secondary Sections */}
      <main className="main-content">
        <LanguagesSection data={resumeData?.languages} />
        <EducationSection data={resumeData?.education} />
        <ExperiencesSection data={resumeData?.experiences} />
        <ProjectsSection data={resumeData?.projects} />
      </main>
    </div>
  )
}

export default App