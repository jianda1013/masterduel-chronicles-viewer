import { Switch, Tooltip, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "../../contexts";

// Styled components
const StyledContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const StyledIcon = styled("div", {
  shouldForwardProp: (prop) => prop !== "isDarkMode",
})(({ theme, isDarkMode }) => ({
  color: theme.palette.text.primary,
  fontSize: "1.2rem",
}));

const StyledSwitch = styled(Switch, {
  shouldForwardProp: (prop) => prop !== "isDarkMode",
})(({ theme, isDarkMode }) => ({
  "& .MuiSwitch-thumb": {
    backgroundColor: isDarkMode ? "#ffd700" : "#f5f5f5",
  },
  "& .MuiSwitch-track": {
    backgroundColor: isDarkMode ? "#667eea" : "#cbd5e1",
    opacity: 1,
  },
}));

/**
 * Theme toggle switch component
 * Allows users to switch between light and dark modes
 */
const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Tooltip
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <StyledContainerBox>
        <StyledIcon isDarkMode={isDarkMode}>
          {isDarkMode ? <Brightness7 /> : <Brightness4 />}
        </StyledIcon>
        <StyledSwitch
          checked={isDarkMode}
          onChange={toggleTheme}
          color="primary"
          isDarkMode={isDarkMode}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
        />
      </StyledContainerBox>
    </Tooltip>
  );
};

export default ThemeToggle;
