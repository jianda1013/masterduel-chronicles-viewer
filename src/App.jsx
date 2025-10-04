import { useState } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppHeader from "./components/layout/AppHeader";
import TimelineContainer from "./components/timeline/TimelineContainer";
import FloatingActionButton from "./components/ui/FloatingActionButton";
import { ThemeProvider, useTheme } from "./contexts";

// Create theme configuration function that supports both light and dark modes
const createAppTheme = (isDarkMode) => createTheme({
  palette: {
    mode: isDarkMode ? 'dark' : 'light',
    primary: {
      main: '#667eea',
      light: '#764ba2',
    },
    secondary: {
      main: '#f093fb',
    },
    background: {
      default: isDarkMode ? '#0f0f0f' : '#ffffff',
      paper: isDarkMode ? '#1a1a1a' : '#f3f4f6',
    },
    text: {
      primary: isDarkMode ? '#ffffff' : '#111111',
      secondary: isDarkMode ? '#a0a0a0' : '#666666',
    },
    divider: isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
  },
  typography: {
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    h2: {
      fontWeight: 700,
      fontSize: '1.25rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          boxShadow: isDarkMode 
            ? '0 1px 2px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)'
            : '0 1px 2px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.06)',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: isDarkMode 
              ? '0 4px 12px rgba(0, 0, 0, 0.4)'
              : '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: isDarkMode 
            ? '0 4px 20px rgba(0, 0, 0, 0.4)'
            : '0 4px 20px rgba(0, 0, 0, 0.15)',
          '&:hover': {
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow: isDarkMode 
              ? '0 8px 25px rgba(0, 0, 0, 0.5)'
              : '0 8px 25px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

/**
 * App content component that uses theme context
 * Manages year selection state and coordinates navigation between timeline sections
 */
function AppContent() {
  const [selectedYear, setSelectedYear] = useState(null);
  const { isDarkMode } = useTheme();

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  const handleBackToTop = () => {
    setSelectedYear(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const theme = createAppTheme(isDarkMode);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <AppHeader 
          selectedYear={selectedYear} 
          onYearSelect={handleYearSelect} 
        />

        <main className="page">
          <div className="content">
            <TimelineContainer />
          </div>
        </main>

        <div className="float-btns">
          <FloatingActionButton
            onClick={handleBackToTop}
            title="Back to top"
            icon="↑"
          />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

/**
 * Main application component with theme provider
 */
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
