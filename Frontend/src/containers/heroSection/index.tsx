/**
 * HeroSection Component
 *
 * HeroSection component displays the hero section of the website, showcasing the benefits
 * of opening a savings account with Argent Bank.
 *
 * @return {JSX.Element} Returns a JSX element displaying the hero section.
 */
import "./style.css";
const HeroSection = () => {
  return (
    <div className="hero">
      <section className="hero-content">
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};

export default HeroSection;
