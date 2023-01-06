import React, { useCallback } from "react";
import { Flex, Heading, Stack, Wrap, WrapItem } from "@chakra-ui/react";

import { ZodiacCard } from "../organisms/ZodiacCard";
import { zodiacSignsData } from "../../consts/zodiacSigns";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  // const navigate = useNavigate();

  // const onClickSign = (sign: string) => {
  //   navigate(`/daily-horoscope/${sign}`);
  // };

  const allCards = zodiacSignsData.map((zodiacSign) => {
    return (
      <WrapItem key={zodiacSign.sign}>
        <ZodiacCard
          sign={zodiacSign.sign}
          dateMax={zodiacSign.dateMax}
          dateMin={zodiacSign.dateMin}
        />
      </WrapItem>
    );
  });

  return (
    <>
      <Flex align="center" justify="center" direction="column">
        <Heading textAlign="center" as="h1" size="3xl" mb={4}>
          Daily Horoscope
        </Heading>
        <Heading textAlign="center" as="h2">
          Choose your sign
        </Heading>
        <Flex mt={6}>
          <Stack>
            <Wrap justify="center">{allCards}</Wrap>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
