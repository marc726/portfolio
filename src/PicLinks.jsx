import React, { useState } from 'react';
import './PicLinks.css';

const iconDetails = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marc-rizzolo-111b4a139/',
    src: `${process.env.PUBLIC_URL}/linkedin-app-white-icon.webp`,
    alt: 'LinkedIn Icon',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/marc726',
    src: `${process.env.PUBLIC_URL}/github-icon.png`,
    alt: 'GitHub Icon',
  }
];

const PicLinks = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipText, setTooltipText] = useState('');

  return (
    <div className="pic-links-container">
      {iconDetails.map((icon, index) => (
        <div key={index} className="icon-wrapper"
             onMouseEnter={() => { setTooltipVisible(true); setTooltipText(icon.name); }}
             onMouseLeave={() => setTooltipVisible(false)}>
          <a href={icon.href} target="_blank" rel="noopener noreferrer" className="icon-link">
            <img src={icon.src} alt={icon.alt} className="icon-image" />
          </a>
          {tooltipVisible && <div className="tooltip">{tooltipText}</div>}
        </div>
      ))}
    </div>
  );
};

export default PicLinks;
