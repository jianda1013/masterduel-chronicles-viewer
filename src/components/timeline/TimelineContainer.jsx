import { Box, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import TimelineSection from "./TimelineSection";
import { getAllTimelineData } from "../../data/timelineData";

// Styled components
const StyledMainBox = styled(Box)(({ theme }) => ({
  width: '100%',
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: '3rem 0',
  background: `linear-gradient(90deg, transparent, ${theme.palette.divider}, transparent)`,
  height: '2px',
  border: 'none',
}));

/**
 * Timeline container component that renders all year sections
 * Displays all timeline years in a concatenated, scrollable view
 */
const TimelineContainer = () => {
  const timelineData = getAllTimelineData();

  return (
    <StyledMainBox component="main" role="main">
      {timelineData.map((yearData, index) => (
        <Box key={yearData.id}>
          <TimelineSection yearData={yearData} />
          {index < timelineData.length - 1 && (
            <StyledDivider />
          )}
        </Box>
      ))}
    </StyledMainBox>
  );
};

export default TimelineContainer;
