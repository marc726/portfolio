import React from 'react';
import { Box, Tooltip, Link } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function SocialIcons() {
  return (
    <Box
      position="fixed"
      bottom="20px"
      left="50%"
      transform="translateX(-50%)"
      zIndex="999"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding="0 10px"
    >
      <Tooltip label="LinkedIn">
        <Link href="https://www.linkedin.com/in/marc-rizzolo-111b4a139/" isExternal>
          <FaLinkedin style={{ marginRight: '20px', fontSize: '24px', color: '#0077B5' }} />
        </Link>
      </Tooltip>
      <Tooltip label="GitHub">
        <Link href="https://github.com/marc726" isExternal>
          <FaGithub style={{ fontSize: '24px', color: '#000000' }} />
        </Link>
      </Tooltip>
    </Box>
  );
}

export default SocialIcons;
