import React from "react";
import {
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  Th,
  Button,
  Text,
  HStack,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { CalendarViewType, useCalendar } from "@h6s/calendar";
import { format, getDate, isToday } from "date-fns";

const Calender: React.FC = () => {
  const { headers, body, month, year, navigation } = useCalendar({
    defaultViewType: CalendarViewType.Month,
  });

  return (
    <Box
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      bg={useColorModeValue("white", "gray.800")}
      p={5}
      maxWidth="100%"
      overflowX="auto"
    >
      <HStack justify="space-between" mb={4}>
        <HStack>
          <Button size="sm" onClick={navigation.toPrev}>
            &lt;
          </Button>
          <Text>{format(new Date(year, month), "MMM yyyy")}</Text>
          <Button size="sm" onClick={navigation.toNext}>
            &gt;
          </Button>
        </HStack>
        <Button size="sm" onClick={navigation.setToday}>
          Today
        </Button>
      </HStack>
      <Table size="sm" variant="simple">
        <Thead>
          <Tr>
            {headers.weekDays.map(({ key, value }) => (
              <Th key={key}>{format(value, "E")}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {body.value.map(({ key, value: days }) => (
            <Tr key={key}>
              {days.map(({ key, value }) => (
                <Td key={key} color={isToday(value) ? "red.500" : "inherit"}>
                  {getDate(value)}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Calender;
