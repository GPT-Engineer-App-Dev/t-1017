import { Box, Text, VStack, Container } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} flex="1">
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
      </VStack>
      <Footer />
    </Container>
  );
};

const Footer = () => (
  <Box as="footer" py={4} textAlign="center" width="100%" bg="gray.200" mt="auto">
    <Text fontSize="sm">© 2023 Your Company. All rights reserved.</Text>
  </Box>
);

export default Index;