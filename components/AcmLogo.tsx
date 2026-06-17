import React from "react";

interface AcmLogoProps {
  className?: string;
  size?: number;
}

export const AcmLogo: React.FC<AcmLogoProps> = ({ className = "", size = 100 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none`}
    >
      <defs>
        {/* Diamond Gradient (Sky to Royal Blue) */}
        <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7DA6EC" />
          <stop offset="50%" stopColor="#4184DD" />
          <stop offset="100%" stopColor="#1B51A3" />
        </linearGradient>

        {/* Inner Circle Gradient */}
        <linearGradient id="innerCircleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1C75BC" />
          <stop offset="100%" stopColor="#004680" />
        </linearGradient>

        {/* Subtle Drop Shadow */}
        <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Outer White circular container */}
      <circle cx="200" cy="200" r="195" fill="white" filter="url(#logoShadow)" />

      {/* Blue Diamond (Rotated Square) */}
      <rect
        x="90"
        y="90"
        width="220"
        height="220"
        rx="24"
        transform="rotate(45 200 200)"
        fill="url(#diamondGrad)"
      />

      {/* White Ring */}
      <circle cx="200" cy="200" r="128" fill="white" />

      {/* Inner Blue Circle */}
      <circle cx="200" cy="200" r="116" fill="url(#innerCircleGrad)" />

      {/* White Ring Outline inside the Circle */}
      <circle cx="200" cy="200" r="95" stroke="white" strokeWidth="8" fill="transparent" />

      {/* ACM Bold Typography */}
      <text
        x="200"
        y="218"
        fill="white"
        fontSize="76"
        fontFamily="var(--font-outfit), 'Arial Black', sans-serif"
        fontWeight="900"
        textAnchor="middle"
        letterSpacing="-3"
      >
        acm
      </text>
    </svg>
  );
};
