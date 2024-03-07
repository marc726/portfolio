import React, { useState, useEffect, useRef } from 'react';

const CommandPrompt = () => {
  const [command, setCommand] = useState('');
  const [responses, setResponses] = useState(['Welcome to my website! Type "help" for a list of available commands.\nLinks are clickable below as well!']);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const cliContainerRef = useRef(null); // Reference for the entire CLI container

  useEffect(() => {
    // Automatically scroll to show the input field
    inputRef.current.scrollIntoView({ behavior: "smooth" });
  }, [responses]);

  useEffect(() => {
    // Focus input when clicking within the CLI container
    const handleClick = () => inputRef.current.focus();

    // Adding event listener
    const cliContainerElement = cliContainerRef.current;
    cliContainerElement.addEventListener('click', handleClick);

    // Cleanup event listener on component unmount
    return () => cliContainerElement.removeEventListener('click', handleClick);
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
      minWidth: '600px',
      maxHeight: '300px',
      maxWidth: '600px',
      overflow: 'hidden',
      //borderTop: '12px solid #bbb', was cutting off the top of the terminal probably wont need this
      display: 'flex',
      flexDirection: 'column',
      fontSize: '11px'
    }}>
      <div style={{
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
        }}>marc - CLI - 600x300</div>
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
        flexGrow: 1
      }}>
        {responses.map((response, index) => (
          <pre key={index} style={{ whiteSpace: 'pre-wrap' }}>{response}</pre>
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
