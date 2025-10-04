import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled components
const StyledSectionBox = styled(Box)(({ theme }) => ({
  marginBottom: '4rem',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  scrollMarginTop: '100px',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
  '&:last-child': {
    marginBottom: '2rem',
  },
}));

const StyledHeaderBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '2rem',
  position: 'relative',
}));

const StyledTitleTypography = styled(Typography)(({ theme }) => ({
  margin: '0 0 1rem 0',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  lineHeight: 1.2,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '4px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '2px',
    opacity: 0.6,
  },
}));

const StyledDescriptionTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  margin: '0 auto',
  maxWidth: '600px',
  lineHeight: 1.6,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '16px',
  padding: '1.5rem',
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: theme.palette.mode === 'dark' 
      ? '0 8px 25px rgba(0, 0, 0, 0.4)'
      : '0 8px 25px rgba(0, 0, 0, 0.15)',
  },
}));

const StyledImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  display: 'block',
  borderRadius: '12px',
  maxWidth: '100%',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

/**
 * Individual timeline section component for a specific year
 * @param {Object} props - Component props
 * @param {Object} props.yearData - Timeline data for the year
 */
const TimelineSection = ({ yearData }) => {
  if (!yearData) return null;

  return (
    <StyledSectionBox 
      id={`year-${yearData.id}`}
      component="section"
      aria-labelledby={`year-title-${yearData.id}`}
    >
      <StyledHeaderBox component="header">
        <StyledTitleTypography 
          id={`year-title-${yearData.id}`}
          variant="h3"
          component="h2"
        >
          {yearData.title}
        </StyledTitleTypography>
        
        <StyledDescriptionTypography variant="body1">
          {yearData.description}
        </StyledDescriptionTypography>
      </StyledHeaderBox>
      
      <StyledPaper elevation={2}>
        <StyledImageBox
          component="img"
          src={yearData.src}
          alt={yearData.title}
          loading="lazy"
        />
      </StyledPaper>
    </StyledSectionBox>
  );
};

export default TimelineSection;
