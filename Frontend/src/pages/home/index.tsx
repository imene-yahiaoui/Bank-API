/**
 * Home Component
 *
 * Renders the home page with a HeroSection and HomeFeatures.
 *
 * @returns {JSX.Element} - Rendered component.
 */
import HeroSection from "../../containers/heroSection";
import HomeFeatures from "../../containers/homeFeatures";
import "./style.css";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HomeFeatures />
    </div>
  );
};

export default Home;
