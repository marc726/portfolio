import React from 'react';
import { motion } from 'framer-motion';
import { Box, Image, Text, Heading, Container, VStack } from '@chakra-ui/react';
import PicLinks from './PicLinks';

const AboutMePage = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={10} align="stretch" variants={containerVariants} initial="hidden" animate="visible" as={motion.div}>
        {/* Introduction Section with Animation */}
        <Box as={motion.div} variants={itemVariants}>
          <Image borderRadius="full" boxSize="250px" src={`${process.env.PUBLIC_URL}/picofme.jpg`} alt="Picture of Me" mx="auto" objectFit="cover"/>
          <Heading as="h1" size="xl" mt={4}>Hi, I'm Marc Rizzolo</Heading>
          <Text fontSize="lg" mt={2}>CS Student at Rutgers University</Text>
        </Box>

        {/* About Me Section with Animation */}
        <Box as={motion.div} variants={itemVariants}>
          <Heading as="h2" size="lg">About Me</Heading>
          <Text mt={2}>I'm currently pursuing my second degree in Computer Science. During my time at PBF Energy, I had the honor of being put on a team with fantastic individuals from DevOps where
          we created and pushed automation scripts into production for my team. They are the reason I finally found my passion and what I want make a career out of. </Text>
          <Text mt={50}>I'm also a huge fan of various video games and am currently in the process of writing my own book!</Text>
        </Box>

        {/* Add more sections as needed */}
      </VStack>
        <PicLinks />
    </Container>
    
  );
};

export default AboutMePage;
