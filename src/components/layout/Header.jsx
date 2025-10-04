import { useScrollHandler } from "../common/ScrollHandler";
import headbarImage from "../../assets/headbar.png";

/**
 * Header component with dynamic headbar that responds to scroll
 * Features a collapsible headbar image that minimizes when scrolling
 */
const Header = () => {
  const isScrolled = useScrollHandler(100);

  return (
    <header className="topbar">
      <div className={`headbar-container ${isScrolled ? "scrolled" : ""}`}>
        <img
          src={headbarImage}
          alt="Master Duel Chronicles Header"
          className="headbar-image"
        />
      </div>
    </header>
  );
};

export default Header;
