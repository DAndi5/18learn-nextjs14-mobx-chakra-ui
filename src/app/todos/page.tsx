'use client'
import React from "react";
import TodosCompIndex from "../components/todos/ui";
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import Link from "next/link";
import Navbar2 from "@/app/components/layout/navbar/navbartodolist";

const TodosIndex = () => {
  return (
    <>
      <Navbar2/>
      <TodosCompIndex/>
    </>
  );
};

export default TodosIndex;
