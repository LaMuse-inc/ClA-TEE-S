"use client";

import React from "react";

interface WavePatternProps {
  className?: string;
  color?: string;
  opacity?: number;
  flip?: boolean;
}

export const WavePattern: React.FC<WavePatternProps> = ({
  className = "",
  color = "#6DD5DA",
  opacity = 0.1,
  flip = false,
}) => {
  return (
    <div className={`absolute inset-x-0 overflow-hidden ${className}`}>
      <svg
        className={`w-full h-full ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={color}
          fillOpacity={opacity}
          d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export const WavePatternTop: React.FC<WavePatternProps> = (props) => {
  return (
    <div className="absolute inset-x-0 top-0 h-32 overflow-hidden pointer-events-none">
      <WavePattern {...props} flip={true} />
    </div>
  );
};

export const WavePatternBottom: React.FC<WavePatternProps> = (props) => {
  return (
    <div className="absolute inset-x-0 bottom-0 h-32 overflow-hidden pointer-events-none">
      <WavePattern {...props} />
    </div>
  );
};
