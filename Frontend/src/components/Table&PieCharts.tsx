import {
  Badge,
  Box,
  Checkbox,
  Flex,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar, Pie } from "react-chartjs-2";

// Register chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const barData = {
  labels: ["00", "04", "08", "12", "14", "18"],
  datasets: [
    {
      label: "Visitors",
      data: [200, 450, 300, 500, 400, 600],
      backgroundColor: "#7F00FF",
    },
  ],
};

const pieData = {
  labels: ["Your files", "System", "Others"],
  datasets: [
    {
      data: [63, 25, 12],
      backgroundColor: ["#00D1FF", "#7F00FF", "#FF0080"],
    },
  ],
};

const tableData = [
  {
    name: "Horizon UI PRO",
    progress: "17.5%",
    quantity: 2468,
    date: "24.Jan.2021",
    checked: true,
  },
  {
    name: "Horizon UI Free",
    progress: "10.8%",
    quantity: 1485,
    date: "12.Jun.2021",
    checked: true,
  },
  {
    name: "Weekly Update",
    progress: "21.3%",
    quantity: 1024,
    date: "5.Jan.2021",
    checked: false,
  },
  {
    name: "Venu 3D Asset",
    progress: "31.5%",
    quantity: 858,
    date: "7.Mar.2021",
    checked: false,
  },
  {
    name: "Marketplace",
    progress: "12.2%",
    quantity: 256,
    date: "17.Dec.2021",
    checked: true,
  },
];

const TableCharts: React.FC = () => {
  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="lg"
          bg={useColorModeValue("white", "gray.800")}
          lineHeight={"0"}
        >
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Check Table
          </Text>
          <Table variant="simple" fontSize={"small"}>
            <Thead>
              <Tr>
                <Th>NAME</Th>
                <Th>PROGRESS</Th>
                <Th>QUANTITY</Th>
                <Th>DATE</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((row, index) => (
                <Tr key={index}>
                  <Td>
                    <Checkbox isChecked={row.checked} />
                    {row.name}
                  </Td>
                  <Td>{row.progress}</Td>
                  <Td>{row.quantity}</Td>
                  <Td>{row.date}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Flex direction={{ base: "column", md: "row" }} gap={5}>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            bg={useColorModeValue("white", "gray.800")}
            flex="1"
            minWidth="0"
          >
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Daily Traffic
            </Text>
            <Text fontSize="2xl" mb={2}>
              2,579 <Badge colorScheme="green">+2.46%</Badge>
            </Text>
            <Box height="300px">
              <Bar data={barData} options={{ maintainAspectRatio: false }} />
            </Box>
          </Box>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            bg={useColorModeValue("white", "gray.800")}
            flex="1"
            minWidth="0"
          >
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Your Pie Chart
            </Text>
            <Box height="300px">
              <Pie data={pieData} options={{ maintainAspectRatio: false }} />
            </Box>
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default TableCharts;
