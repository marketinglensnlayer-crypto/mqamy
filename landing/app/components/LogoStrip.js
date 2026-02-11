
"use client"
import React from 'react';
import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6 } from './DemoLogos';

const LogoStrip = () => {
  // Array of logo components
  const logos = [
    { id: 1, component: <Logo1 className="logo-svg" /> },
    { id: 2, component: <Logo2 className="logo-svg" /> },
    { id: 3, component: <Logo3 className="logo-svg" /> },
    { id: 4, component: <Logo4 className="logo-svg" /> },
    { id: 5, component: <Logo5 className="logo-svg" /> },
    { id: 6, component: <Logo6 className="logo-svg" /> },
  ];

  // Duplicate the list multiple times to ensure seamless scrolling
  // Duplicating more times to ensure the track is long enough for larger screens
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="logo-strip-container">
      <div className="logo-strip-track">
        {allLogos.map((logo, index) => (
          <div key={index} className="logo-item">
            {logo.component}
          </div>
        ))}
      </div>
      <style jsx>{`
        .logo-strip-container {
          width: 100%;
          overflow: hidden;
          background-color: var(--color-darker);
          padding: 2rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }

        .logo-strip-container::before,
        .logo-strip-container::after {
            content: "";
            position: absolute;
            top: 0;
            width: 150px;
            height: 100%;
            z-index: 2;
            pointer-events: none;
        }

        .logo-strip-container::before {
            left: 0;
            background: linear-gradient(to right, var(--color-darker), transparent);
        }

        .logo-strip-container::after {
            right: 0;
            background: linear-gradient(to left, var(--color-darker), transparent);
        }

        .logo-strip-track {
          display: flex;
          gap: 6rem;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        
        .logo-strip-track:hover {
            animation-play-state: paused;
        }

        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 120px;
          opacity: 0.4;
          transition: all 0.3s ease;
          color: var(--color-gray-400);
        }
        
        .logo-item:hover {
            opacity: 1;
            color: var(--color-primary);
            transform: scale(1.05);
        }
        
        /* Global class for the SVGs to ensure they inherit color */
        :global(.logo-svg) {
            fill: currentColor;
            width: auto;
            height: 32px;
            max-width: 140px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* 
               We have 4 sets of logos.
               To loop seamlessly, we need to move by the width of 1/4th of the total track.
             */
             transform: translateX(-25%);
          }
        }
      `}</style>
    </div>
  );
};

export default LogoStrip;
