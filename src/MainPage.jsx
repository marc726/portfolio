import React from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/react';

function MainPage() {
  return (
    <Box textAlign="center" mt="4">
      <Heading>Welcome awesome individual!</Heading>
      <Heading as="h2" size="lg" mt="2">My name is Marc Rizzolo</Heading>
      <Text mt="2">I'm an aspiring software engineer looking for a development position.</Text>
      <Divider my="4" />
    </Box>
  );
}

export default MainPage;
