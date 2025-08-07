// Military service section component
import PropTypes from 'prop-types'

const MilitaryServiceSection = ({ data }) => {
  // Use provided data or return null if no data
  const militaryService = data || []
  
  if (!militaryService.length) {
    return null
  }

  return (
    <section className="military-service-section">
      <h2>Military Service</h2>
      <div className="military-service-list">
        {militaryService.map(service => (
          <div key={service.id} className="military-service-item">
            <div className="military-service-content">
              <div className="military-service-text">
                <div className="military-service-header">
                  <h3 className="military-service-title">{service.title}</h3>
                  <span className="period">{service.period}</span>
                </div>
                <p className="organization">{service.organization}</p>
                <p className="description">{service.description}</p>
                {service.highlights && service.highlights.length > 0 && (
                  <ul className="highlights">
                    {service.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="military-service-picture">
                {service.image ? (
                  <img src={service.image} alt={`${service.title} service`} />
                ) : (
                  <div className="picture-placeholder">
                    <span>🎖️</span>
                    <p>Service Photo</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

MilitaryServiceSection.propTypes = {
  data: PropTypes.array
}

export default MilitaryServiceSection