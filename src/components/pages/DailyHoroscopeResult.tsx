import { useLoaderData, useParams, LoaderFunctionArgs } from "react-router-dom";

import _ from "lodash";

import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { getDailyHoroscope } from "../../hooks/useDailyHoroscope";

import { Horoscope } from "../../types/api/horoscope";

export default function DailyHoroscopeResult() {
  const horoscopeData = useLoaderData() as Horoscope;
  const { sign } = useParams();

  console.log(horoscopeData);

  return (
    <Box>
      <Text textAlign="center">{horoscopeData.current_date}</Text>
      <Heading textAlign="center" as="h1" size="3xl" mb={10}>
        Today's {_.capitalize(sign)} Horoscope
      </Heading>
      <Container mb={10}>
        <Text>{horoscopeData.description}</Text>
      </Container>
      <Container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          w="150px"
          h="80px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Text>Lucky Number</Text>
          <Text>{horoscopeData.lucky_number}</Text>
        </Box>
        <Box
          w="150px"
          h="80px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Text>Lucky Color</Text>
          <Text>{horoscopeData.color}</Text>
        </Box>
        <Box
          w="150px"
          h="80px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Text>Lucky Time</Text>
          <Text>{horoscopeData.lucky_time}</Text>
        </Box>
        <Box
          w="150px"
          h="80px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Text>Mood</Text>
          <Text>{horoscopeData.mood}</Text>
        </Box>
      </Container>
    </Box>
  );
}

export const loader = ({ params }: LoaderFunctionArgs): Promise<Horoscope> => {
  const data = getDailyHoroscope(params.sign as string);
  return data;
};
