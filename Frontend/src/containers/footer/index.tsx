/**
 * Footer Component
 *
 * Footer component displays the footer content with the copyright information for Argent Bank.
 *
 * @return {JSX.Element} Returns a JSX element displaying the footer with copyright information.
 */
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <p className="footer-text" data-testid="footer">
        Copyright 2020 Argent Bank
      </p>
    </footer>
  );
};

export default Footer;
