# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal resume project aimed at creating a minimalist, high-end, and design-driven website to showcase personal characteristics and professional experience. 
To facilitate maintenance and modification, please create easily editable text sections. Required features for this project include: photo, personal introduction, education, special experiences, and project experience. Simple animations should be used to enhance the browsing experience for readers.

## Current State

React project with Vite build system is fully set up and functional. All core components are implemented with responsive design and testing infrastructure in place.

## Development Guidelines

### Code Comments
- Write brief comments above code blocks for easier maintenance and modification
- Focus on explaining the "why" rather than the "what" in comments
- TEST the code you write!

### Project Goals
- Maintain minimalist design principles
- Ensure high-end visual appeal
- Create design-driven user experience
- Effectively showcase personal characteristics

### Project Tools
- React

## Development Commands

- `npm run dev` - Start development server (runs on http://localhost:5173)
- `npm run build` - Build production version
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality
- `npm run test` - Run Vitest tests

## Deployment Commands

- `npm run deploy` - Deploy to GitHub Pages (manual deployment)
- `npm run predeploy` - Build before deployment (runs automatically)

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── PhotoSection.jsx
│   ├── IntroSection.jsx
│   ├── EducationSection.jsx
│   ├── ExperiencesSection.jsx
│   └── ProjectsSection.jsx
├── data/
│   └── content.js      # Centralized content data (easily editable)
├── __tests__/          # Test files
└── App.jsx             # Main application component
```

## Content Management

All content is centralized in `src/data/content.js` for easy editing. Update the `resumeData` object to modify:
- Personal information and photo
- Education entries
- Special experiences
- Project showcases

## Technical Features

- Responsive design with mobile-first approach
- Hover animations and smooth transitions
- Component-based architecture
- ESLint code quality checks
- Vitest testing framework
- Modern CSS with Flexbox/Grid layouts

## GitHub Pages Deployment

This project is configured for easy deployment to GitHub Pages with two deployment methods:

### Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:
- Builds the project when changes are pushed to the main branch
- Deploys to GitHub Pages
- Updates the live site at `https://[username].github.io/bib/`

**Setup Steps:**
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Set Source to "GitHub Actions"
4. The workflow will automatically trigger on push to main branch

### Manual Deployment

For manual deployment using the gh-pages package:

1. Install dependencies: `npm install`
2. Run deployment: `npm run deploy`

**Important Notes:**
- The site will be available at `https://[username].github.io/bib/`
- The `base: '/bib/'` setting in `vite.config.js` ensures proper asset paths
- Content is loaded from `public/profolio/profolio.md` - update this file to modify content
- The deployment process builds the project and uploads to the `gh-pages` branch
- GitHub Actions workflow is configured with PERSONAL_ACCESS_TOKEN deployment
- Production build fixed for proper asset loading and ES module support