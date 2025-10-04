import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppHeader from "./components/layout/AppHeader";
import TimelineContainer from "./components/timeline/TimelineContainer";
import FloatingActionButton from "./components/ui/FloatingActionButton";

// Create a custom theme that matches your design
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#667eea',
      light: '#764ba2',
    },
    secondary: {
      main: '#f093fb',
    },
    background: {
      default: '#ffffff',
      paper: '#f3f4f6',
    },
    text: {
      primary: '#111111',
      secondary: '#666666',
    },
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
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.06)',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          '&:hover': {
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
  },
});

/**
 * Main application component
 * Manages year selection state and coordinates navigation between timeline sections
 */
function App() {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  const handleBackToTop = () => {
    setSelectedYear(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
