"use client";

import {
  BellIcon,
  InfoIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  BoxProps,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FiBarChart,
  FiGrid,
  FiHome,
  FiLock,
  FiMenu,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import DashboardCards from "./DashboardCard";
import Charts from "./Bar&LineCharts";
import TableCharts from "./Table&PieCharts";
import CalenderTask from "./calender&task";
import { BiSmile } from "react-icons/bi";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: FiHome },
  { name: "NFT Marketplace", icon: FiShoppingCart },
  { name: "Tables", icon: FiBarChart },
  { name: "Karban", icon: FiGrid },
  { name: "Profile", icon: FiUser },
  { name: "Sign In", icon: FiLock },
];

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          HORIZON FREE
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}

      <Box
        pos={"absolute"}
        bottom={2}
        bg={"#4d29ff"}
        left={2}
        right={2}
        borderRadius={"xl"}
        textAlign={"center"}
        height={"150px"}
        p={5}
      >
        <Box
          width={"80px"}
          height={"80px"}
          bg={"#4d29ff"}
          borderRadius={"50%"}
          pos={"absolute"}
          top={"-40px"}
          left={"30%"}
          style={{
            border: `5px solid ${useColorModeValue("#ffffff", "#171824")} `,
          }}
        >
          <BiSmile style={{ fontSize: "70px" }} />
        </Box>
        <Text fontSize={"lg"} pt={10} fontWeight={800}>
          Upgarde to PRO
        </Text>
        <Text>To get acccess to all fetures connects!</Text>
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        HF
      </Text>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
      >
        <Text
          display={{ base: "none", md: "flex" }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Main Dashboard
        </Text>
        <Flex
          p={4}
          alignItems="center"
          justifyContent="space-between"
          backgroundColor={useColorModeValue("gray.100", "gray.700")}
          padding={2}
          borderRadius={"3rem"}
          width={"fit-content"}
          gap={2}
        >
          <InputGroup maxW="400px">
            <InputLeftElement pointerEvents="none">
              <SearchIcon />
            </InputLeftElement>
            <Input type="text" placeholder="Search" borderRadius={"3rem"} />
          </InputGroup>
          <Flex alignItems="center">
            <IconButton aria-label="Notifications" icon={<BellIcon />} mr={2} />
            <IconButton
              aria-label="Toggle Dark Mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              mr={2}
            />
            <IconButton aria-label="Information" icon={<InfoIcon />} mr={2} />
            <Avatar size="sm" src="path/to/your/avatar.jpg" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
        <DashboardCards />
        <Charts />
        <TableCharts />
        <CalenderTask />
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
