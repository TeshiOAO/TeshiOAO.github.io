// Language context for managing bilingual content
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { bilingualContent } from '../data/bilingualContent'

// Create language context
const LanguageContext = createContext()

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('zh') // Default to Chinese

  // Toggle between Chinese and English
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh')
  }

  // Get current content based on selected language
  const content = useMemo(() => bilingualContent[language], [language])

  // Context value memoized to prevent unnecessary re-renders
  const value = useMemo(() => ({
    language,
    content,
    toggleLanguage,
    isEnglish: language === 'en',
    isChinese: language === 'zh'
  }), [language, content])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired
}

// Custom hook for using language context
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
