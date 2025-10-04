import { Fab, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled components
const StyledFab = styled(Fab)(({ theme }) => ({
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px) scale(1.05)',
  },
}));

/**
 * Floating Action Button component for quick navigation
 * @param {Object} props - Component props
 * @param {Function} props.onClick - Click handler function
 * @param {string} props.title - Button title/tooltip
 * @param {string} props.icon - Icon or text to display
 * @param {string} props.color - MUI color variant
 * @param {string} props.size - MUI size variant
 */
const FloatingActionButton = ({ 
  onClick, 
  title = "Action", 
  icon = "↑",
  color = "primary",
  size = "medium"
}) => {
  return (
    <Tooltip title={title} placement="left">
      <StyledFab
        onClick={onClick}
        aria-label={title}
        color={color}
        size={size}
      >
        {icon}
      </StyledFab>
    </Tooltip>
  );
};

export default FloatingActionButton;
