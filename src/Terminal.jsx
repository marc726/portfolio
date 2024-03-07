import React, { useState, useEffect, useRef } from 'react';

const CommandPrompt = () => {
  const [command, setCommand] = useState('');
  const [responses, setResponses] = useState(['Welcome to my website! Type "help" for a list of available commands.\nLinks are clickable below as well!']);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [cliSize, setCliSize] = useState({ width: '60vw', height: '50vh' }); // Initial CLI size based on viewport
  const inputRef = useRef(null);
  const cliContainerRef = useRef(null);

  useEffect(() => {
    inputRef.current.scrollIntoView({ behavior: "smooth" });
  }, [responses]);

  useEffect(() => {
    const handleClick = () => inputRef.current.focus();
    const cliContainerElement = cliContainerRef.current;
    cliContainerElement.addEventListener('click', handleClick);

    return () => cliContainerElement.removeEventListener('click', handleClick);
  }, []);

  // Adjust CLI size based on window resize
  useEffect(() => {
    const handleResize = () => {
      setCliSize({ width: '60vw', height: '50vh' }); // Adjust these values as needed
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Call once to set initial size
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

  const handleCommand = (inputCommand) => {
    const trimmedCommand = inputCommand.trim();
    let newResponse = '';

    switch (trimmedCommand.toLowerCase()) {
      case 'email':
        newResponse = 'marcrizzolo726@gmail.com: copied to clipboard!';
        navigator.clipboard.writeText('marcrizzolo726@gmail.com');
        break;
      case 'resume':
        newResponse = 'Downloading resume...';
        // link public folder to the resume file
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/MarcResume.pdf`;
        link.download = 'resume.pdf';
        link.click();
        break;
      case 'linkedin':
        newResponse = 'Opening LinkedIn...';
        window.open('https://www.linkedin.com/in/marc-rizzolo-111b4a139/', '_blank');
        break;
      case 'github':
        newResponse = 'Opening GitHub...';
        window.open('https://www.github.com/marc726', '_blank');
        break;
      case 'help':
        newResponse = 'Available commands:\n- email\n- resume\n- linkedin\n- github\n- help\n- clear';
        break;
      case 'clear':
        // Clear the screen, but keep the welcome message
        setResponses([]);
        setCommandHistory([]);
        break;
      default:
        newResponse = 'Command not recognized. Type "help" for a list of available commands.';
        break;
    }

    // Update responses and command history if not clearing
    if (trimmedCommand && trimmedCommand.toLowerCase() !== 'clear') {
      setResponses(prev => [...prev, `~$ ${trimmedCommand}`, newResponse]);
      setCommandHistory(prev => [trimmedCommand, ...prev]);
    }

    setHistoryIndex(-1);
    setCommand(''); // Reset command input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(command);
  };

  const handleChange = (e) => {
    setCommand(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    } else if (e.key === 'ArrowUp') {
      const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      setHistoryIndex(newIndex);
      setCommand(commandHistory[newIndex] || '');
    } else if (e.key === 'ArrowDown') {
      const newIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIndex);
      setCommand(commandHistory[newIndex] || '');
    }
  };

  return (
    <div ref={cliContainerRef} style={{
      backgroundColor: 'rgba(30, 30, 30, 0.75)',
      color: '#fff',
      fontFamily: 'Monaco, monospace',
      borderRadius: '5px',
      minHeight: '300px',
      minWidth: '400px',
      width: cliSize.width, // Set width dynamically
      height: cliSize.height, // Set height dynamically
      maxHeight: '400px', // Set max height if needed
      maxWidth: '800px', // Set max width if needed
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      fontSize: '11px',

    }}>
      <div style={{ // Top bar
        height: '20px', // Keep the original fixed height
        backgroundColor: '#bbb',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px',
      }}>
        <div style={{ width: '33%' }}></div>
        <div style={{
          width: '33%',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: '20px', // Adjust lineHeight if necessary
          color: '#121212', // Extremely dark gray color for the "Command Prompt" text
          // Use transform for vertical alignment adjustment instead of padding
          transform: 'translateY(-10%)',
        }}>marc - CLI</div>
        <div style={{
          width: '33%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
          <img src={`${process.env.PUBLIC_URL}/redicon.png`} alt="Red Icon" style={{ marginRight: '10px', height: '16px' }} />          
          <img src={`${process.env.PUBLIC_URL}/yellowicon.png`} alt="Yellow Icon" style={{ marginRight: '10px', height: '16px' }} />
          <img src={`${process.env.PUBLIC_URL}/greenicon.png`} alt="Green Icon" style={{ marginRight: '10px', height: '16px' }} />
        </div>
        
      </div>

      <div style={{
        overflowY: 'auto',
        overflowX: 'hidden',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word', // Ensure long words don't cause horizontal scrolling
        flexGrow: 1
      }}>
        {responses.map((response, index) => (
          <pre key={index} style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{response}</pre>
        ))}
        <form onSubmit={handleSubmit}>
          {'~$ '}
          <input 
            type="text" 
            value={command} 
            onChange={handleChange} 
            autoFocus 
            style={{ 
              backgroundColor: 'transparent', 
              color: '#fff', 
              border: 'none', 
              outline: 'none', 
              fontFamily: 'Monaco, monospace', 
              width: '90%',
              fontSize: '11px'
            }} 
            onKeyPress={handleKeyPress} 
            ref={inputRef} 
          />
        </form>
      </div>
    </div>
  );
};

export default CommandPrompt;
