import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Heading, Text, Image, HStack } from '@chakra-ui/react';

function ProjectLayout({ projects }) {
  return (
    <Accordion allowToggle>
      {projects.map((project, index) => (
        <AccordionItem key={index}>
          <AccordionButton>
            <HStack flex="1" align="center" justify="space-between">
              <Box textAlign="left">
                <Heading as="h3" size="md">{project.name}</Heading>
              </Box>
              <HStack>
                {project.icons.map((icon, index) => (
                  <Image
                    key={index}
                    src={`${process.env.PUBLIC_URL}/${icon}`}
                    alt="Language Icon"
                    boxSize="20px"
                    mr="5px"
                  />
                ))}
              </HStack>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text>{project.description}</Text>
            <Text>Languages used: {project.languages.join(", ")}</Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default ProjectLayout;
