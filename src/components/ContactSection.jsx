// Contact information section component
import PropTypes from 'prop-types'

const ContactSection = ({ data }) => {
  // Use provided data or fallback to empty data
  const contact = data || { email: '' }
  
  if (!contact.email) {
    return null // Don't render if no contact info
  }
  
  return (
    <section className="contact-section">
      <h2>Contact Information</h2>
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-icon">📧</span>
          <a href={`mailto:${contact.email}`} className="contact-link">
            {contact.email}
          </a>
        </div>
      </div>
    </section>
  )
}

ContactSection.propTypes = {
  data: PropTypes.object
}

export default ContactSection