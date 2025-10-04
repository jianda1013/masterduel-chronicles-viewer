import { AppBar, Toolbar, Typography, Box, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "./Header";
import YearNavigation from "../navigation/YearNavigation";
import ThemeToggle from "../ui/ThemeToggle";

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderBottom: '1px solid',
  borderBottomColor: theme.palette.divider,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: '0 clamp(1rem, 5vw, 3rem)',
  minHeight: '64px',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

const NavigationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  height: '48px',
  margin: '0 8px',
  borderColor: theme.palette.text.secondary,
  opacity: 0.5,
  borderWidth: '1px',
}));

/**
 * Main application header component combining header and navigation
 * @param {Object} props - Component props
 * @param {number|null} props.selectedYear - Currently selected year
 * @param {Function} props.onYearSelect - Callback when year is selected
 */
const AppHeader = ({ selectedYear, onYearSelect }) => {
  return (
    <StyledAppBar position="sticky" elevation={0}>
      <Header />
      <StyledToolbar>
        <StyledTypography variant="h2" component="h1">
          Master Duel Chronicles
        </StyledTypography>
        
        <NavigationContainer>
          <YearNavigation 
            selectedYear={selectedYear} 
            onYearSelect={onYearSelect} 
          />
          <StyledDivider orientation="vertical" flexItem />
          <ThemeToggle />
        </NavigationContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default AppHeader;
