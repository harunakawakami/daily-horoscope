import { useLoaderData, useParams, LoaderFunctionArgs } from "react-router-dom";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import _ from "lodash";

import { getDailyHoroscope, getColorCode } from "../../utils/api";
import { Horoscope, ZodiacSigns } from "../../types/api/horoscope";

export default function DailyHoroscopeResult() {
  const horoscopeData = useLoaderData() as Horoscope;
  const hexColor = getColorCode(horoscopeData.color);

  const { sign } = useParams();

  return (
    <Flex direction="column" alignItems="center" p={5}>
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
        justifyContent="space-evenly"
      >
        <Wrap spacing="20px" justify="center">
          <WrapItem>
            <Box
              minW="170px"
              h="70px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              mb={3}
            >
              <Text>Lucky Number</Text>
              <Text>{horoscopeData.lucky_number}</Text>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box
              minW="170px"
              h="70px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              mb={3}
            >
              <Text>Lucky Color</Text>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
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
          </WrapItem>
          <WrapItem>
            <Box
              minW="170px"
              h="70px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              mb={3}
            >
              <Text>Lucky Time</Text>
              <Text>{horoscopeData.lucky_time}</Text>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box
              minW="170px"
              h="70px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              mb={3}
            >
              <Text>Mood</Text>
              <Text>{horoscopeData.mood}</Text>
            </Box>
          </WrapItem>
        </Wrap>
      </Container>
    </Flex>
  );
}

export const loader = ({ params }: LoaderFunctionArgs): Promise<Horoscope> => {
  const data = getDailyHoroscope(params.sign as ZodiacSigns);
  return data;
};
