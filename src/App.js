import './App.css';
import ContactForm from './contactform';
import React, { useState, useEffect, useRef } from 'react';

// Main Page component
const MainPage = () => {
  return (
    <div>
      <h1>Welcome awesome individual!</h1>
      <h2>My name is Marc Rizzolo,</h2>
      <p>I'm an aspiring software engineer looking for a development position.</p>
    </div>
  );
};

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
        <img src={`${process.env.PUBLIC_URL}/github-icon.png`} alt="Descriptive Text" style={{ width: '20px', height: '20px' }} />
      </a>
    </div>
  );
}


function HireMeButton() {
  const [showMiniBox, setShowMiniBox] = useState(false);
  const miniBoxRef = useRef(null); // Ref for the mini box

  // Function to copy email to clipboard
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('marcrizzolo726@gmail.com');
      alert('Email address copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
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
      <button onClick={(e) => {
        e.stopPropagation(); // Prevent event from reaching the document when opening
        setShowMiniBox(!showMiniBox);
      }}>Hire Me</button>
      
      {showMiniBox && (
        <div 
          style={{
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            padding: '20px', 
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


function Separator() {
  return <hr style={{ margin: '20px 0' }} />;
}

// Project Introduction
function ProjectIntroduction() {
  const projects = [
    {
      name: "Mock Travel System",
      description: "SQL database and Java application that simulates a travel system. Users can book flights. Admins can add and remove flights. Uses JDBC to connect to the database.",
      languages: ["Java", "SQL"],
      icons: ["databaseicon.png", "javaicon.png"]
    },
    {
      name: "Photo Album",
      description: "JavaFX/Java application that allows users to upload and view photos. Users can also add and remove tags from photos. Has also been ported to Android.",
      languages: ["Java", "JavaFX", "Android"],
      icons: ["javaicon.png", "android.webp"]
    },
    {
      name: "Lightweight File Transfer",
      description: "Python application that allows users to transfer files between computers on the same network. Uses sockets and TCP protocol to transfer files.",
      languages: ["Python"],
      icons: ["pythonicon.webp"]
    },
    {
      name: "Personal Website",
      description: "This website! Built using React and deployed to my own home server.",
      languages: ["React", "HTML", "CSS"],
      icons: ["react.webp", "codehtmlicon.png", "cssicon.png"]
    }
  ];

  return (
    <div>
      <h2>Check out my projects:</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>
            {project.name}
            {project.icons.map((icon, index) => (
              <img
                key={index}
                src={`${process.env.PUBLIC_URL}/${icon}`}
                alt="Language Icon"
                style={{ width: '20px', height: '20px', marginLeft: '5px' }}
              />
            ))}
          </h3>
          <p>{project.description}</p>
          <p>Languages used: {project.languages.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}



// Add ProjectIntroduction component to App
function App() {
  return (
    <div>
      <MainPage />
      <Separator />
      <MyFace />
      <HireMeButton />
      <Separator />
      <ProjectIntroduction />
      <PicLinks />
    </div>
  );
}

export default App;