import React, { useState } from 'react';
import { Button, Stack, Box } from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { IoMdDownload } from 'react-icons/io';

function HireMeButton() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = 'marcrizzolo726@gmail.com'; // Replace with your email
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000); // Reset the copied state after 2 seconds
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href =`${process.env.PUBLIC_URL}/MarcResume.pdf`; // Replace with the actual path to your resume file
    link.download = 'MarcRizzoloResume.pdf'; // Replace with the desired file name and extension
    link.click();
  };

  return (
    <Box
      position="fixed"
      bottom="80px" // Adjust this value based on the size of the SocialIcons component and desired spacing
      left="50%"
      transform="translateX(-50%)"
      zIndex="999"
      p={4} // Add padding to the entire component
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {emailCopied && <span style={{ color: 'green', marginBottom: '10px' }}>Email copied!</span>}
        <Stack direction='row' spacing={4}>
          <Button
            leftIcon={<MdEmail />}
            colorScheme='teal'
            variant='solid'
            onClick={handleCopyEmail}
          >
            Email
          </Button>
          <Button
            rightIcon={<IoMdDownload />}
            colorScheme='teal'
            variant='outline'
            onClick={handleResumeDownload}
          >
            Resume
          </Button>
        </Stack>
      </div>
    </Box>
  );
}

export default HireMeButton;
