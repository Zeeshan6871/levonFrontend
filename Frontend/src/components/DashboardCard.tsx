import {
  Box,
  ChakraProvider,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { BiBarChart, BiCheckCircle, BiDollarCircle } from "react-icons/bi";
import { LuFiles } from "react-icons/lu";

interface CardData {
  label: string;
  value: string;
  subtext?: string;
  flag?: string;
  icon?: IconType;
}

const data: CardData[] = [
  { label: "Earnings", value: "$350.4", icon: BiBarChart },
  { label: "Spend this Month", value: "$682.5", icon: BiDollarCircle },
  { label: "Sales", value: "$574.34", subtext: "23% since last month" },
  {
    label: "Your balance",
    value: "$1,000",
    flag: "https://flagsapi.com/US/shiny/64.png",
  },
  { label: "New Tasks", value: "154", icon: BiCheckCircle },
  { label: "Total Projects", value: "2935", icon: LuFiles },
];

const DashboardCards: React.FC = () => {
  return (
    <ChakraProvider>
      <Box p={5}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 6 }} spacing={5}>
          {data.map((card, index) => (
            <Box
              key={index}
              shadow="md"
              borderWidth="1px"
              borderRadius="2rem"
              bg={useColorModeValue("white", "gray.800")}
              p={4}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {card.icon && (
                <Icon
                  _groupHover={{
                    color: "white",
                  }}
                  as={card.icon}
                  fontSize={"xxx-large"}
                />
              )}
              <Box>
                <Text fontSize="small" fontWeight={5}>
                  {card.label}
                </Text>
                <Text fontSize="2xl">{card.value}</Text>
                {card.subtext && (
                  <Text fontSize="small" color="green.500">
                    {card.subtext}
                  </Text>
                )}
              </Box>

              {card.flag && (
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                >
                  <img src={card.flag} style={{ objectFit: "cover" }} />
                </div>
              )}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
};

export default DashboardCards;
