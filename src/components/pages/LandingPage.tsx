import React from "react";
import { Flex, Heading, Stack } from "@chakra-ui/react";

import { ZodiacCards } from "../organisms/ZodiacCards";
import { zodiacSignsData } from "../../consts/zodiacSigns";

export default function LandingPage() {
  const allCards = zodiacSignsData.map((zodiacSigns) => {
    return (
      <ZodiacCards
        sign={zodiacSigns.sign}
        dateMax={zodiacSigns.dateMax}
        dateMin={zodiacSigns.dateMin}
      />
    );
  });

  return (
    <>
      <Flex align="center" justify="center" direction="column">
        <Heading as="h1">Daily Horoscope</Heading>
        <Heading as="h2">Choose your sign</Heading>

        <Stack>{allCards}</Stack>
      </Flex>
    </>
  );
}
