import React from "react";
import { Flex, Heading, Stack, Wrap, WrapItem } from "@chakra-ui/react";

import { ZodiacCards } from "../organisms/ZodiacCards";
import { zodiacSignsData } from "../../consts/zodiacSigns";

export default function LandingPage() {
  const allCards = zodiacSignsData.map((zodiacSigns) => {
    return (
      <WrapItem key={zodiacSigns.sign}>
        <ZodiacCards
          sign={zodiacSigns.sign}
          dateMax={zodiacSigns.dateMax}
          dateMin={zodiacSigns.dateMin}
        />
      </WrapItem>
    );
  });

  return (
    <>
      <Flex align="center" justify="center" direction="column">
        <Heading as="h1" size="3xl" mb={4}>
          Daily Horoscope
        </Heading>
        <Heading as="h2">Choose your sign</Heading>
        <Flex mt={6}>
          <Stack>
            <Wrap justify="center">{allCards}</Wrap>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
