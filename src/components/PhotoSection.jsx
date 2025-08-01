// Photo section component
import PropTypes from 'prop-types'
import { resumeData } from '../data/content'

const PhotoSection = ({ data }) => {
  // Use provided data or fallback to default data
  const personal = data || resumeData.personal
  return (
    <section className="photo-section">
      <div className="photo-container">
        {personal.photo ? (
          <img 
            src={personal.photo} 
            alt={personal.name}
            className="profile-photo"
          />
        ) : (
          <div className="photo-placeholder">
            {personal.name.split(' ').map(name => name[0]).join('')}
          </div>
        )}
      </div>
      <h1 className="name">{personal.name}</h1>
      <p className="title">{personal.title}</p>
    </section>
  )
}

PhotoSection.propTypes = {
  data: PropTypes.object
}

export default PhotoSection