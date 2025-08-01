// Contact information section component
import PropTypes from 'prop-types'

const ContactSection = ({ data }) => {
  // Use provided data or fallback to empty data
  const contact = data || { email: '', phone: '' }
  
  if (!contact.email && !contact.phone) {
    return null // Don't render if no contact info
  }
  
  return (
    <section className="contact-section">
      <h2>Contact Information</h2>
      <div className="contact-info">
        {contact.email && (
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <a href={`mailto:${contact.email}`} className="contact-link">
              {contact.email}
            </a>
          </div>
        )}
        {contact.phone && (
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <a href={`tel:${contact.phone}`} className="contact-link">
              {contact.phone}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

ContactSection.propTypes = {
  data: PropTypes.object
}

export default ContactSection