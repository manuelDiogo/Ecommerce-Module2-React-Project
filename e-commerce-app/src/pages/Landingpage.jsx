import React, { useState, useEffect } from 'react';
import { Box, Container, Heading, Text, Button, Image } from "@chakra-ui/react";
import { Link as ReactRouterLink} from "react-router-dom";

function Landingpage () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDiscountIndex, setCurrentDiscountIndex ] =useState(0)
  const featuredProductImages = [
    'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1514524865930-188150490d83?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProductImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [featuredProductImages.length]);
  const featuredDiscountedImages = [
    "https://images.unsplash.com/photo-1597260491619-bab87197869f?q=80&w=3026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1666238855001-d11112be431f?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1564091880021-bb02f2b2928d?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1589833870588-8a0902bcf55b?q=80&w=2178&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1541140532154-b024d705b90a?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];
useEffect(() => {
    const interval = setInterval(() => {
        setCurrentDiscountIndex((prevIndex) => (prevIndex + 1) % featuredDiscountedImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [featuredDiscountedImages.length]);
  return (
    <Box>
      <Box bg="teal" color="white" py={4} px={8}>
        <Container maxW="container.xl">
          <Heading as="h1" fontSize="3xl">
            Your Brand
          </Heading>
        </Container>
      </Box>
      <Box bg="gray.100" py={20}>
        <Container maxW="container.xl" textAlign="center">
          <Heading as="h2" fontSize="5xl" mb={4}>
            Welcome to Your Brand
          </Heading>
          <Text fontSize="xl" mb={8}>
            Shop the latest trends in fashion, electronics, and more.
          </Text>
          <Button colorScheme="teal" size="lg" as={ReactRouterLink} to="/home">
            Shop Now
          </Button>
        </Container>
      </Box>
      <Box display="flex">
      <Box bg="gray.100"  boxSize="50%" >
        <Container maxW="container.xl" mt="0" pt="0" textAlign="center">
          <Heading as="h2"  mt="0" pt="0" fontSize="4xl" mb={8}>
            Featured Products
          </Heading>
          <Image boxSize={["100%", "700px"]} src={featuredProductImages[currentIndex]} alt={`Image ${currentIndex}`} />
        </Container>
      </Box>
      <Box bg="gray.100"  boxSize="50%" >
      <Container maxW="container.xl" mt="0" pt="0" textAlign="center">
          <Heading as="h2"  mt="0" pt="0" fontSize="4xl" mb={8}>
            Discounted Products
          </Heading>
          <Image boxSize={["100%", "700px"]} src={featuredDiscountedImages[currentIndex]} alt={`Image ${currentIndex}`} />
        </Container>
      </Box>
      </Box>
    </Box>
  );
}

export default Landingpage;