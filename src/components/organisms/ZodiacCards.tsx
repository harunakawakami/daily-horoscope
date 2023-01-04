import React from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

export const ZodiacCards = () => {
  return (
    <>
      <Box
        w="260px"
        h="260px"
        bg="white"
        borderRadius="10px"
        shadow="md"
        p={4}
        _hover={{ cursor: "pointer", opacity: 0.8 }}
      >
        <Stack textAlign="center">
          <Image
            boxSize="160px"
            borderRadius="full"
            alt={userName}
            src={imageUrl}
            m="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            {userName}
          </Text>
          <Text>{fullName}</Text>
        </Stack>
      </Box>
    </>
  );
};
