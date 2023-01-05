import React from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  sign: string;
  dateMin: string;
  dateMax: string;
};

export const ZodiacCards = (props: Props) => {
  const { sign, dateMin, dateMax } = props;

  return (
    <>
      <Box
        w="200px"
        h="200px"
        p={4}
        _hover={{ cursor: "pointer", opacity: 0.8 }}
      >
        <Stack textAlign="center">
          <Image
            boxSize="100px"
            alt={sign}
            src={`/zodiac_signs/100/${sign}.png`}
            m="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            {sign}
          </Text>
          <Text>
            {dateMin} to {dateMax}
          </Text>
        </Stack>
      </Box>
    </>
  );
};
