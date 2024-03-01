import './App.css';
import React, { useState, useEffect } from 'react';

// Main Page component
const MainPage = () => {
  return (
    <div>
      <h1>Welcome awesome individual!</h1>
      <h2>My name is Marc Rizzolo,</h2>
      <p>I'm an aspiring software engineer looking for a development position.</p>
      {/* Link to navigate to Second Page */}
    </div>
  );
};


//body paragraph/about me
function AboutMe() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
</div>
  );
}

//image of me

function MyFace() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: "'Cascade Mono', monospace" }}>
      <div style={{ textAlign: 'left', display: 'flex', alignItems: 'center', padding: '20px' }}>
        <p>I am a recent graduate from the Rutgers with a bachelors in Computer Science. 
          I have a passion for software development and am looking for a position in the field. I have experience with Java, C++, Python, and JavaScript. 
          I am also familiar with HTML, CSS, and React. I am a quick learner and am eager to learn new technologies.</p>
      </div>
      <img src={`${process.env.PUBLIC_URL}/picofme.jpg`} alt="Description" style={{ objectFit: 'contain', maxWidth: '30%', maxHeight: '30%' }} />
    </div>
  );
}


// Links to my social media
function PicLinks() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', position: 'fixed', bottom: '20px', left: '0', width: '100%', overflowX: 'auto' }}>
      <a href="https://www.linkedin.com/in/marc-rizzolo-111b4a139/" target="_blank" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/linkedin-app-white-icon.webp`} alt="Descriptive Text" style={{ width: '20px', height: '20px' }} />
      </a>
      <a href="https://github.com/marc726" target="_blank" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/github-icon.webp`} alt="Descriptive Text" style={{ width: '20px', height: '20px' }} />
      </a>
    </div>
  );
}


// in the future, open up a new box to copy email
function HireMeButton(){
  return (
    <div style={{ textAlign: 'center' }}>
      <a href="mailto:marcrizzolo726@gmail.com">   
        <button>Hire Me</button>
      </a>
    </div>
  );
}

// Functions
function App() {
  return (
      <div>
        <MainPage />
        <AboutMe />
        <MyFace />
        <HireMeButton />
        <PicLinks />
      </div>
          );
}

export default App;