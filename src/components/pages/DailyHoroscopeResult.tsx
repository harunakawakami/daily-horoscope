import { useLoaderData, useParams, LoaderFunctionArgs } from "react-router-dom";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

import _ from "lodash";

import { getDailyHoroscope, getColorCode } from "../../utils/api";
import { Horoscope } from "../../types/api/horoscope";

export default function DailyHoroscopeResult() {
  const horoscopeData = useLoaderData() as Horoscope;
  const hexColor = getColorCode(horoscopeData.color);

  const { sign } = useParams();

  return (
    <Box>
      <Text textAlign="center" fontSize="2xl" mb={8}>
        {horoscopeData.current_date}
      </Text>
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
          minW="150px"
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
          minW="150px"
          h="80px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Text>Lucky Color</Text>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <Text mr={5}>{horoscopeData.color}</Text>
            {hexColor && (
              <Box
                w="35px"
                h="35px"
                borderRadius="full"
                background="#f5f5f5"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  w="25px"
                  h="25px"
                  borderRadius="full"
                  background={`${hexColor}`}
                ></Box>
              </Box>
            )}
          </Box>
        </Box>
        <Box
          minW="150px"
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
          minW="150px"
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
