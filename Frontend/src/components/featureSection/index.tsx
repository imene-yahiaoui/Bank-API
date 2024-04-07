/**
 * FeatureSection Component
 *
 * This component displays a feature section with an image, title, and text.
 *
 * @param {Object} FeatureSectionProps - The props object containing the following properties:
 * @param {string} FeatureSectionProps.img - The URL of the image to be displayed.
 * @param {string} FeatureSectionProps.title - The title of the feature section.
 * @param {string} FeatureSectionProps.text - The text content of the feature section.
 *
 * @return {JSX.Element} Returns a JSX element displaying the feature section.
 */
import React from "react";
import "./style.css";

interface FeatureSectionProps {
  img: string;
  title: string;
  text: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  img,
  title,
  text,
}) => {
  return (
    <div className="feature-item">
      <img className="feature-icon" src={img} alt="Chat Icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeatureSection;
