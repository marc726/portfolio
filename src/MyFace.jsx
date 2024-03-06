import React from 'react';
import Typewriter from './Typewriter'; // Import the Typewriter component

const MyFace = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'monospace', color: 'white' }}>
      <div style={{ textAlign: 'left', padding: '20px' }}>
        {/* Use the Typewriter component with desired text and speed */}
        <Typewriter text="I am a recent graduate from Rutgers with a Bachelor's in Computer Science. I have a passion for software development and am looking for a position in the field. I have experience with Java, C++, Python, and JavaScript. I am also familiar with HTML, CSS, and React. I am a quick learner and am eager to learn new technologies." speed={50} />
      </div>
      <img src={`${process.env.PUBLIC_URL}/picofme.jpg`} alt="Description" style={{ objectFit: 'contain', maxWidth: '30%', maxHeight: '30%' }} />
    </div>
  );
};

export default MyFace;
