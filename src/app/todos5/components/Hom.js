'use client'
// import React from 'react';
import {observer} from "mobx-react-lite"
import {
  Button,
  Input,
  Flex,
  Checkbox,
  Heading,
  HStack,
  Spacer,
  Stack
} from "@chakra-ui/react";
import todosStore from "@/app/components/todos/store/todosStore";


function Hom({store}) {
  const changeUser = () => {
    store.updateUser("New data");
  }

  const addSubject = () => {
    store.addSubject('Aeronotics');
  }
  return (
    <div className="App">
      <Stack direction={{base: "column", md: "row"}} align={"center"}>
        <Heading>MobX Store</Heading>
        <br/>{" "}
        <h1>{store.userInfo.name} - {store.userInfo.id}</h1>
        <br/>{" "}
        <Flex p={1} flex={1} align={"center"} justify={"center"}>
          <Button
            position="static"
            onClick={changeUser}
          >
            Update User
          </Button>
          <Button
            position="static"
            onClick={addSubject}
          >
            Add Subject
          </Button>
        </Flex>
        <Stack direction={{base: "column", md: "row"}} align={"center"}>
          {
            store.userInfo.subject.map((key, index) => <Flex pt={2} key={index}> {key}</Flex>)
          }
        </Stack>
      </Stack>
    </div>
  );
}

export default observer(Hom);
