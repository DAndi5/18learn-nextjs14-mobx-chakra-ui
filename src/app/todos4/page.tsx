'use client'
import Image from "next/image";

import Users from "./Users";
import {usersStore} from "./usersStore";
import React from "react";
import Navbar2 from "@/app/components/layout/navbar/navbartodolist";
import {Box, Heading, Link} from "@chakra-ui/react";
import Paragraph from "@/app/todos5/components/paragraph";
import NextLink from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar2/>
      <Box maxWidth="8xl" margin="auto" p={5}>
        {/*<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">*/}
        <Heading>Monsterlessons Academy</Heading>
        <Paragraph>
          This is the same project from{' '}
          <Link as={NextLink} href="https://github.com/monsterlessonsacademy/monsterlessonsacademy/tree/244-mobx"
                target='_blank'>
            GitHub
          </Link>{' '}&{' '}
          <Link as={NextLink} href="https://www.youtube.com/watch?v=AgcaGGkYy_8&list=LL&index=27"
                target='_blank'>
            YouTube
          </Link>
        </Paragraph>
        <Users store={usersStore}/>
        {/*</div>*/}
      </Box>
    </main>
  );
}
