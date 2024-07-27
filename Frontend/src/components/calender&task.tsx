import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Progress,
  useColorModeValue,
  Text,
  Checkbox,
  SimpleGrid,
} from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";
import Calender from "./Calender";

// Example data (replace with your actual data)
const tableData = [
  {
    name: "Intranet UI/UX",
    status: "✅Approved",
    date: "18 Apr 2022",
    progress: 80, // Example: 80% progress
  },
  {
    name: "Intranet UI/UX",
    status: "⚠Error",
    date: "18 Apr 2022",
    progress: 40, // Example: 80% progress
  },
  {
    name: "Intranet UI/UX",
    status: "❌Disable",
    date: "18 Apr 2022",
    progress: 60, // Example: 80% progress
  },
  {
    name: "Intranet UI/UX",
    status: "✅Approved",
    date: "18 Apr 2022",
    progress: 80, // Example: 80% progress
  },
  // Add more rows as needed
];

const tasksList = [
  {
    select: true,
    label: "Landing Page Design",
  },
  {
    select: false,
    label: "Dashboard Builder",
  },
  {
    select: true,
    label: "Mobile Design",
  },
  {
    select: false,
    label: "illustrations",
  },
  {
    select: true,
    label: "promotions LP",
  },

  // Add more tasks
];

const CalenderTask: React.FC = () => {
  return (
    <Flex direction={{ base: "column", lg: "row" }} gap={5} p={5}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5} flex="1">
        {/* Left side: Complex Table */}
        <Box
          shadow="md"
          borderWidth="1px"
          borderRadius="lg"
          bg={useColorModeValue("white", "gray.800")}
          p={5}
          overflowY="auto"
        >
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Project Progress
          </Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>NAME</Th>
                <Th>STATUS</Th>
                <Th>DATE</Th>
                <Th>PROGRESS</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((row, index) => (
                <Tr key={index}>
                  <Td>{row.name}</Td>
                  <Td>{row.status}</Td>
                  <Td>{row.date}</Td>
                  <Td>
                    <Progress
                      value={row.progress}
                      colorScheme="teal"
                      size="sm"
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        {/* Right side: Tasks and Calendar */}
        <Flex direction="column" gap={5}>
          {/* Tasks */}
          <Box
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            bg={useColorModeValue("white", "gray.800")}
            p={5}
          >
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Tasks
            </Text>
            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {tasksList.map((task, index) => (
                <li key={index}>
                  <Flex justify="space-between" gap={5}>
                    <Flex gap={5}>
                      <Checkbox isChecked={task.select} />
                      <div>{task.label}</div>
                    </Flex>
                    <div>
                      <DragHandleIcon />
                    </div>
                  </Flex>
                </li>
              ))}
            </ul>
          </Box>

          {/* Calendar */}
          <Box
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            bg={useColorModeValue("white", "gray.800")}
            p={5}
            flex="1"
          >
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              April 2021
            </Text>
            <Calender />
          </Box>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default CalenderTask;
