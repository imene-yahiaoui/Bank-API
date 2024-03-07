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
