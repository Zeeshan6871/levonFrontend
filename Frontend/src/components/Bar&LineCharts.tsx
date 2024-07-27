import {
  Badge,
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import React, { useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getTable } from "../redux/tableData/actions";

// Register chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const Charts: React.FC = () => {
  const dispatch: any = useDispatch();
  const { isLoading, isError, Table } = useSelector(
    (state: RootState) => state.store
  );

  useEffect(() => {
    dispatch(getTable());
  }, [dispatch]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error loading data.</Text>;
  }

  const lineData = Table?.lineData || {
    labels: [],
    datasets: [],
  };

  const barData = Table?.barData || {
    labels: [],
    datasets: [],
  };

  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="lg"
          bg={useColorModeValue("white", "gray.800")}
        >
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            This month
          </Text>
          <Text fontSize="2xl" mb={2}>
            $37.5K
          </Text>
          <Text fontSize="sm" color="green.500" mb={4}>
            Total Spent - <Badge colorScheme="green">+2.46%</Badge>
          </Text>
          <Text fontSize="sm" color="green.500" mb={4}>
            On track
          </Text>
          <Line data={lineData} />
        </Box>
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="lg"
          bg={useColorModeValue("white", "gray.800")}
        >
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Weekly Revenue
          </Text>
          <Bar data={barData} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Charts;
