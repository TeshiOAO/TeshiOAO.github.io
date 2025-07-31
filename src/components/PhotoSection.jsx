// Photo section component
import { resumeData } from '../data/content'

const PhotoSection = () => {
  return (
    <section className="photo-section">
      <div className="photo-container">
        {resumeData.personal.photo ? (
          <img 
            src={resumeData.personal.photo} 
            alt={resumeData.personal.name}
            className="profile-photo"
          />
        ) : (
          <div className="photo-placeholder">
            {resumeData.personal.name.split(' ').map(name => name[0]).join('')}
          </div>
        )}
      </div>
      <h1 className="name">{resumeData.personal.name}</h1>
      <p className="title">{resumeData.personal.title}</p>
    </section>
  )
}

export default PhotoSection