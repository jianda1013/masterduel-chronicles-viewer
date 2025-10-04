import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { AVAILABLE_YEARS } from "../../data/timelineData";

/**
 * Year navigation component with scroll-to-section functionality
 * @param {Object} props - Component props
 * @param {number|null} props.selectedYear - Currently selected year
 * @param {Function} props.onYearSelect - Callback when year is selected
 */
const YearNavigation = ({ selectedYear, onYearSelect }) => {
  const handleAllYearsClick = () => {
    onYearSelect(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleYearClick = (year) => {
    onYearSelect(year);
    scrollToYearSection(year);
  };

  const scrollToYearSection = (year) => {
    const yearElement = document.getElementById(`year-${year}`);
    if (yearElement) {
      yearElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <ToggleButtonGroup
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
      sx={{
        '& .MuiToggleButton-root': {
          border: '1px solid rgba(229, 231, 235, 1)',
          borderRadius: '8px',
          minWidth: '60px',
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
          fontWeight: 500,
          '&.Mui-selected': {
            backgroundColor: '#111111',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#111111',
            },
          },
          '&:hover': {
            backgroundColor: '#cbd5e1',
            color: '#0f172a',
          },
        },
      }}
    >
      <ToggleButton value={null} aria-label="View all years">
        All Years
      </ToggleButton>
      {AVAILABLE_YEARS.map((year) => (
        <ToggleButton 
          key={year} 
          value={year}
          aria-label={`Navigate to ${year} timeline`}
        >
          {year}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default YearNavigation;
