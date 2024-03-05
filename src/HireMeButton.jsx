import React, { useState, useEffect, useRef } from 'react';
import './HireMeButton.css'; // Adjust the path based on your file structure


function HireMeButton() {
  const [showMiniBox, setShowMiniBox] = useState(false);
  const miniBoxRef = useRef(null); // Ref for the mini box

  // Function to copy email to clipboard
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('marcrizzolo726@gmail.com');
      alert('Email address copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Function to handle click outside the mini box
  const handleClickOutside = (event) => {
    if (miniBoxRef.current && !miniBoxRef.current.contains(event.target)) {
      setShowMiniBox(false);
    }
  };

  // Add event listener to handle click outside
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
    <button
      className="hire-me-btn"
      onClick={(e) => {
        e.stopPropagation(); // Prevent event from reaching the document when opening
        setShowMiniBox(!showMiniBox);
      }}
    >
      Hire Me
    </button>
      
      {showMiniBox && (
        <div 
          style={{
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            padding: '50px', 
            border: '1px solid #ccc', 
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', 
            backgroundColor: '#666',
            zIndex: 1000 // Ensure it's above other content
          }}
          ref={miniBoxRef} // Use the ref here
        >
          <p>marcrizzolo726@gmail.com</p>
          <button onClick={copyEmailToClipboard}>Click to Copy My Email Address</button>
        </div>
      )}
    </div>
  );
}

export default HireMeButton;
