// Import year images
import image2022 from "../assets/2022.png";
import image2023 from "../assets/2023.png";
import image2024 from "../assets/2024.png";
import image2025 from "../assets/2025.png";

/**
 * Timeline data configuration for Master Duel Chronicles
 * Contains year-specific information and image assets
 */
export const TIMELINE_DATA = {
  2022: {
    id: 2022,
    src: image2022,
    title: "Yu-Gi-Oh! Master Duel Chronicles 2022",
    description: "Card releases and banlist changes for 2022",
  },
  2023: {
    id: 2023,
    src: image2023,
    title: "Yu-Gi-Oh! Master Duel Chronicles 2023",
    description: "Card releases and banlist changes for 2023",
  },
  2024: {
    id: 2024,
    src: image2024,
    title: "Yu-Gi-Oh! Master Duel Chronicles 2024",
    description: "Card releases and banlist changes for 2024",
  },
  2025: {
    id: 2025,
    src: image2025,
    title: "Yu-Gi-Oh! Master Duel Chronicles 2025",
    description: "Card releases and banlist changes for 2025",
  },
};

/**
 * Available years for navigation
 */
export const AVAILABLE_YEARS = Object.keys(TIMELINE_DATA).map(Number).sort();

/**
 * Get timeline data for a specific year
 * @param {number} year - The year to get data for
 * @returns {Object|null} Timeline data or null if year not found
 */
export const getTimelineData = (year) => {
  return TIMELINE_DATA[year] || null;
};

/**
 * Get all timeline entries as an array
 * @returns {Array} Array of timeline entries
 */
export const getAllTimelineData = () => {
  return Object.values(TIMELINE_DATA);
};
