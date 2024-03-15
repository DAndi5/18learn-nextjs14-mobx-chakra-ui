import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
          My Todos
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link
              href="/todos"
            >
              My Todos1
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/todos2"
            >
              My Todos2
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/todos3"
            >
              My Todos3
            </Link></MenuItem>
          <MenuItem>
            <Link
              href="/todos4"
            >
              My Todos4
            </Link></MenuItem>
          <MenuItem>
            <Link
              href="/todos5"
            >
              My Todos5
            </Link></MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}
