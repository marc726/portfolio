import React, { useState } from 'react';
import { ChakraProvider, Tabs, TabList, Tab, TabPanels, TabPanel, extendTheme } from '@chakra-ui/react';
import MainPage from './MainPage';
import AboutMePage from './AboutMePage';
import ProjectLayout from './ProjectLayout';
import projectsData from './projectsData'; // Assuming this is your projects data

// Define custom theme (if not already defined globally)
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
  const [tabIndex, setTabIndex] = useState(0);
  // A state to force re-rendering of the AboutMePage component 
  const [aboutMeKey, setAboutMeKey] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
    // If the About Me tab is selected, update its key to force re-render
    if (index === 1) {
      setAboutMeKey(prevKey => prevKey + 1);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Tabs isFitted variant="enclosed" defaultIndex={0} onChange={handleTabsChange}>
        <TabList mb="1em">
          <Tab>Home</Tab>
          <Tab>About Me</Tab>
          <Tab>Projects</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <MainPage />
          </TabPanel>
          <TabPanel key={aboutMeKey}>
            <AboutMePage />
          </TabPanel>
          <TabPanel>
            <ProjectLayout projects={projectsData} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
}

export default App;
