# Resume Portfolio

A minimalist, high-end, and design-driven personal resume website built with React and Vite. This project embodies clean aesthetics while effectively showcasing personal characteristics and professional experience.

## ✨ Features

- **Minimalist Design** - Clean, professional aesthetic with subtle animations
- **Fully Responsive** - Optimized for all screen sizes from mobile to desktop
- **Component-Based Architecture** - Easy to maintain and customize
- **Centralized Content Management** - Update your information in one place
- **Modern Tech Stack** - React 18, Vite, CSS3 with modern features
- **Performance Optimized** - Fast loading and smooth animations
- **Accessible** - Proper focus states and semantic HTML

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/TeshiOAO/Resume.git
cd Resume

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your resume portfolio.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── PhotoSection.jsx
│   ├── IntroSection.jsx
│   ├── EducationSection.jsx
│   ├── ExperiencesSection.jsx
│   └── ProjectsSection.jsx
├── data/
│   └── content.js      # Your resume content (edit this!)
├── __tests__/          # Test files
├── App.jsx             # Main application
├── App.css             # Styling
└── main.jsx           # Application entry point
```

## ✏️ Customization

### Adding Your Content

Edit `src/data/content.js` to update:
- Personal information and photo
- Education history
- Special experiences
- Project showcases

### Styling

Modify `src/App.css` to customize:
- Colors and gradients
- Typography
- Spacing and layout
- Animations

## 📱 Responsive Design

The portfolio is fully responsive with optimized layouts for:
- **Desktop** (1024px+)
- **Tablet** (768px - 1024px)
- **Mobile** (480px - 768px)
- **Small Mobile** (320px - 480px)

Features fluid typography using CSS `clamp()` functions and flexible layouts that adapt to any screen size.

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Lint code
npm run lint
```

## 🧪 Testing

The project includes:
- Component tests with Vitest
- ESLint for code quality
- Responsive design testing

Run tests with: `npm run test`

## 🌟 Key Sections

1. **Photo Section** - Profile image with name and title
2. **Personal Introduction** - Brief about yourself
3. **Education** - Academic background
4. **Special Experiences** - Unique experiences and achievements
5. **Project Experience** - Portfolio of your work

## 🎨 Design Philosophy

- **Minimalist** - Clean lines, plenty of whitespace
- **High-end** - Professional typography and color palette
- **Design-driven** - Every element serves a purpose
- **User-focused** - Easy to read and navigate

## 📦 Built With

- [React 18](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Vitest](https://vitest.dev/) - Testing framework
- CSS3 with modern features (Grid, Flexbox, clamp())

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The `dist` folder contains the production build ready for deployment to any static hosting service.

### Deploy Options
- **Vercel** - `npm i -g vercel && vercel`
- **Netlify** - Drag and drop `dist` folder
- **GitHub Pages** - Use GitHub Actions workflow
- **Any static host** - Upload `dist` folder contents

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**TeshiOAO**
- GitHub: [@TeshiOAO](https://github.com/TeshiOAO)

---

⭐ If you found this project helpful, please give it a star on GitHub!# Trigger GitHub Actions deployment
