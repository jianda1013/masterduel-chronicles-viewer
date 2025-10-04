import { Box, Divider } from "@mui/material";
import TimelineSection from "./TimelineSection";
import { getAllTimelineData } from "../../data/timelineData";

/**
 * Timeline container component that renders all year sections
 * Displays all timeline years in a concatenated, scrollable view
 */
const TimelineContainer = () => {
  const timelineData = getAllTimelineData();

  return (
    <Box 
      component="main" 
      role="main"
      sx={{ width: '100%' }}
    >
      {timelineData.map((yearData, index) => (
        <Box key={yearData.id}>
          <TimelineSection yearData={yearData} />
          {index < timelineData.length - 1 && (
            <Divider 
              sx={{
                margin: '3rem 0',
                background: 'linear-gradient(90deg, transparent, rgba(229, 231, 235, 1), transparent)',
                height: '2px',
                border: 'none',
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default TimelineContainer;
