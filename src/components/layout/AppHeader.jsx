import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Header from "./Header";
import YearNavigation from "../navigation/YearNavigation";

/**
 * Main application header component combining header and navigation
 * @param {Object} props - Component props
 * @param {number|null} props.selectedYear - Currently selected year
 * @param {Function} props.onYearSelect - Callback when year is selected
 */
const AppHeader = ({ selectedYear, onYearSelect }) => {
  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        backgroundColor: 'background.default',
        borderBottom: '1px solid',
        borderBottomColor: 'divider',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <Header />
      <Toolbar 
        sx={{
          justifyContent: 'space-between',
          padding: '0 clamp(1rem, 5vw, 3rem)',
          minHeight: '64px',
        }}
      >
        <Typography 
          variant="h2" 
          component="h1"
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: { xs: 'none', md: 'block' },
          }}
        >
          Master Duel Chronicles
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <YearNavigation 
            selectedYear={selectedYear} 
            onYearSelect={onYearSelect} 
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
