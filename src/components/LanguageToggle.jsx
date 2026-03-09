// Language toggle button component
import { memo } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './LanguageToggle.css'

const LanguageToggle = memo(() => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'zh' ? 'English' : 'Chinese'}`}
    >
      <span className={`lang-option ${language === 'zh' ? 'active' : ''}`}>
        中文
      </span>
      <span className="lang-divider">/</span>
      <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>
        EN
      </span>
    </button>
  )
})

LanguageToggle.displayName = 'LanguageToggle'

export default LanguageToggle
