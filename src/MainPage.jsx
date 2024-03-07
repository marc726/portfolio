import React from 'react';
import { ChakraProvider, Box, Flex, extendTheme, Text  } from '@chakra-ui/react';
import HireMeButton from './HireMeButton';
import PicLinks from './PicLinks';
import CommandPrompt from './Terminal'; // Assuming the component's name is CommandPrompt

// Define custom theme
const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        overflowY: 'hidden', // Hide vertical scrollbar if not needed
        bg: '#1a202c',
        color: 'white',
      },
      html: {
        margin: 0,
        padding: 0,
      },
    },
  },
});

function MainPage() {
  return (
    <ChakraProvider theme={theme}>
      {/* Use Flex to create a flex container that centers its children */}
      <Flex direction="column" align="center" justify="center" minH="calc(100vh - 20px - 62px)" p={4}>
        {/* Wrapping individual components in Box if needed for additional styling or spacing */}
        {/* CommandPrompt dynamically centered */}
        <Box my={5}> {/* Adds margin to the top and bottom for spacing */}
          <CommandPrompt />
        </Box>
        <Box>
          <HireMeButton />
        </Box>
        <Box textAlign="center" fontSize="sm" fontFamily="'Monaco', monospace" color="gray.500">
          <Text mb={1}>everything you see was made from scratch and with love.</Text>
          <Text>© Marc Rizzolo 2024</Text>
        </Box>
        <Box>
          <PicLinks />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default MainPage;
