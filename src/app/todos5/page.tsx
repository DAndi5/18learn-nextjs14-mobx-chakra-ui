'use client'
import Image from "next/image";
// import './index.css';
import Hom from './components/Hom';
import About from './components/About';
import UserStore from './UserStore';
import React from "react";
import Navbar2 from "@/app/components/layout/navbar/navbartodolist";
import NextLink from 'next/link'
import {
  Link,
  Box,
} from '@chakra-ui/react'
import Paragraph from './components/paragraph'

function Home() {
// export default function Home() {
  const store = new UserStore();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar2/>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <div className="App">
          <Paragraph>
            This is the same project from{' '}
            <Link as={NextLink} href="https://github.com/AmirMustafa/react-mobx-todo/tree/mobx" target='_blank'>
              GitHub
            </Link>{' '}&{' '}
            <Link as={NextLink} href="https://www.youtube.com/watch?v=PbQSvaoA1Iw&list=LL&index=28&t=1914s"
                  target='_blank'>
              YouTube
            </Link>
          </Paragraph>

          <Hom store={store}/>
          <About store={store}/>
        </div>
      </Box>
    </main>
  );
}

export default Home;
