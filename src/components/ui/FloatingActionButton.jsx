import { Fab, Tooltip } from "@mui/material";

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
      <Fab
        onClick={onClick}
        aria-label={title}
        color={color}
        size={size}
        sx={{
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px) scale(1.05)',
          },
        }}
      >
        {icon}
      </Fab>
    </Tooltip>
  );
};

export default FloatingActionButton;
