// Centralized PropTypes definitions for type safety
import PropTypes from 'prop-types'

// Personal information shape
export const personalShape = PropTypes.shape({
  name: PropTypes.string,
  title: PropTypes.string,
  intro: PropTypes.string,
  photo: PropTypes.string
})

// Contact information shape
export const contactShape = PropTypes.shape({
  email: PropTypes.string
})

// Education item shape
export const educationShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  institution: PropTypes.string.isRequired,
  degree: PropTypes.string,
  field: PropTypes.string,
  period: PropTypes.string,
  description: PropTypes.string
})

// Experience item shape
export const experienceShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  organization: PropTypes.string,
  period: PropTypes.string,
  description: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string
})

// Project item shape
export const projectShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  period: PropTypes.string,
  link: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string)
})

// Languages array
export const languagesShape = PropTypes.arrayOf(PropTypes.string)
