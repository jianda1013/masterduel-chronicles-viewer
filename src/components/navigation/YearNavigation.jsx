import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AVAILABLE_YEARS } from "../../data/timelineData";

// Styled components
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButton-root': {
    border: '1px solid',
    borderColor: theme.palette.divider,
    borderRadius: '8px',
    minWidth: '60px',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    fontWeight: 500,
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  margin: '0.4rem',
}));

/**
 * Year navigation component with scroll-to-section functionality
 * @param {Object} props - Component props
 * @param {number|null} props.selectedYear - Currently selected year
 * @param {Function} props.onYearSelect - Callback when year is selected
 */
const YearNavigation = ({ selectedYear, onYearSelect }) => {
  const handleAllYearsClick = () => {
    onYearSelect(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleYearClick = (year) => {
    onYearSelect(year);
    scrollToYearSection(year);
  };

  const scrollToYearSection = (year) => {
    const yearElement = document.getElementById(`year-${year}`);
    if (yearElement) {
      yearElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <StyledToggleButtonGroup
      value={selectedYear}
      exclusive
      onChange={(event, newValue) => {
        if (newValue === null) {
          handleAllYearsClick();
        } else {
          handleYearClick(newValue);
        }
      }}
      aria-label="year navigation"
      size="small"
    >
      {AVAILABLE_YEARS.map((year) => (
        <StyledToggleButton
          key={year}
          value={year}
          aria-label={`Navigate to ${year} timeline`}
        >
          {year}
        </StyledToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
};

export default YearNavigation;
