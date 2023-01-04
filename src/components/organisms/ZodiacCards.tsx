import React, { memo } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

export const ZodiacCards = () => {
  return (
    <>
      <Box
        w="260px"
        h="260px"
        p={4}
        _hover={{ cursor: "pointer", opacity: 0.8 }}
      >
        <Stack textAlign="center">
          <Image
            boxSize="160px"
            // alt={userName}
            // src={imageUrl}
            m="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            {/* {userName} */}
            test
          </Text>
          {/* <Text>{fullName}</Text> */}
        </Stack>
      </Box>
    </>
  );
};
