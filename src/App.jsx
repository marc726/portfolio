import React from 'react';
import { ChakraProvider, Box, Divider, extendTheme } from '@chakra-ui/react';
import HireMeButton from './HireMeButton';
import ProjectLayout from './ProjectLayout';
import PicLinks from './PicLinks';
import MainPage from './MainPage';
import MyFace from './MyFace';
import projectsData from './projectsData'; // Assuming you have a file containing project data

// Define custom theme
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#1a202c', // Very dark gray background color
        color: 'white', // Text color
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box p={4}> {/* Add padding to the entire page */}
        <MainPage />
        <Divider />
        <MyFace />
        <Divider />
        <ProjectLayout projects={projectsData} />
        <HireMeButton />
        <PicLinks />
      </Box>
    </ChakraProvider>
  );
}

export default App;
