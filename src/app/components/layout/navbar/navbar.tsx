'use client'
import {ReactNode} from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import {HamburgerIcon, CloseIcon, AddIcon, ChevronDownIcon} from "@chakra-ui/icons";
import Link from "next/link";
import {ColorModeSwitcher} from "./ColorModeSwitcher";
// const Links = ["Dashboard", "Projects", "Team"];
import navStyles from "./navbar.module.css";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "My Todos",
    path: "/todos",
  },
  {
    name: "All Users",
    path: "/users/",
  },
  {
    name: "With MongoDB",
    path: "/with-mongo-db",
  },
];

const NavLink = ({children, path}: { children: ReactNode; path: string }) => (
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    <Link href={path}>{children}</Link>
  </Box>
);

export default function Navbar() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <div className={navStyles.mobileNav}>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
            aria-label={"Open Menu"}
            display={{md: "none"}}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{base: "none", md: "flex"}}
            >
              {Links.map(({name, path}) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </HStack>
            <ColorModeSwitcher/>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon/>}
            >
              Action
            </Button>

            {/*<Menu>*/}
            {/*  <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>*/}
            {/*    My Todos*/}
            {/*  </MenuButton>*/}
            {/*  <MenuList>*/}
            {/*    <MenuItem>My Todos1</MenuItem>*/}
            {/*    <MenuItem>My Todos2</MenuItem>*/}
            {/*    <MenuItem>My Todos3</MenuItem>*/}
            {/*  </MenuList>*/}
            {/*</Menu>*/}

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "/Default-avatar.jpg"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider/>
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{md: "none"}}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({name, path}) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </div>
  );
}
