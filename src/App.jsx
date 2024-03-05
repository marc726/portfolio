import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import PicLinks from './PicLinks';
import HireMeButton from './HireMeButton';

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