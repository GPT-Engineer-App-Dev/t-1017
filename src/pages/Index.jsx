import { Container, Text, VStack, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
      <VStack spacing={4} flex="1" justifyContent="center">
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
      </VStack>
      <Box as="footer" py={4}>
        <Text fontSize="sm">© 2023 Your Company. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;