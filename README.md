# Master Duel Chronicles Viewer

A modern, interactive web application for viewing Yu-Gi-Oh! Master Duel Chronicles timeline data from 2022-2025. Built with React and Material-UI, this application provides an elegant way to browse through yearly chronicles with smooth navigation and responsive design.

## Features

- **Interactive Timeline Navigation**: Navigate between different years (2022-2025) with smooth scrolling
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean, gradient-based design with hover effects and smooth transitions
- **Year Selection**: Toggle between viewing all years or focusing on specific years
- **Floating Action Button**: Quick "back to top" functionality
- **Lazy Loading**: Images load efficiently for better performance

## Technology Stack

- **Frontend**: React 19.1.1 with JSX
- **Build Tool**: Vite 7.1.7
- **UI Framework**: Material-UI (MUI) 7.3.4
- **Styling**: Emotion (CSS-in-JS)
- **Package Manager**: pnpm
- **Deployment**: GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── AppHeader.jsx      # Main application header
│   │   └── Header.jsx         # Header component
│   ├── navigation/
│   │   └── YearNavigation.jsx # Year selection navigation
│   ├── timeline/
│   │   ├── TimelineContainer.jsx # Main timeline container
│   │   └── TimelineSection.jsx  # Individual year sections
│   ├── ui/
│   │   └── FloatingActionButton.jsx # Back to top button
│   └── common/
│       └── ScrollHandler.jsx  # Scroll handling utilities
├── data/
│   └── timelineData.js        # Timeline data configuration
├── assets/
│   ├── 2022.png              # 2022 chronicles image
│   ├── 2023.png              # 2023 chronicles image
│   ├── 2024.png              # 2024 chronicles image
│   └── 2025.png              # 2025 chronicles image
├── App.jsx                    # Main application component
└── main.jsx                  # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (version 10.18.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd masterduel-chronicles-viewer
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm deploy` - Deploy to GitHub Pages

## Usage

1. **View All Years**: By default, the application shows all chronicle years in a scrollable timeline
2. **Navigate to Specific Year**: Use the year navigation buttons in the header to jump to specific years
3. **Return to Top**: Click the floating action button (↑) to return to the top of the page
4. **Responsive Navigation**: On mobile devices, the year navigation adapts to smaller screens

## Customization

### Adding New Years

To add a new year to the timeline:

1. Add the chronicle image to `src/assets/` (e.g., `2026.png`)
2. Update `src/data/timelineData.js`:
```javascript
import image2026 from "../assets/2026.png";

export const TIMELINE_DATA = {
  // ... existing years
  2026: {
    id: 2026,
    src: image2026,
    title: "Yu-Gi-Oh! Master Duel Chronicles 2026",
    description: "Card releases and banlist changes for 2026",
  },
};
```

### Styling

The application uses Material-UI's theming system. Customize colors, typography, and components in `src/App.jsx`:

```javascript
const theme = createTheme({
  palette: {
    primary: { main: '#667eea' },
    secondary: { main: '#f093fb' },
    // ... other theme options
  },
});
```

## Deployment

The application is configured for GitHub Pages deployment:

```bash
pnpm deploy
```

This will build the application and deploy it to the `gh-pages` branch.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run linting: `pnpm lint`
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
