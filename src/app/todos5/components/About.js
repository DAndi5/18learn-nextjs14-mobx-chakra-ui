import {observer} from "mobx-react-lite";
import {
  Flex,
} from "@chakra-ui/react";

function About({store}) {
  return (
    <div className="App">
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <h1>About - {store.userInfo.name}</h1>
      </Flex>
    </div>
  );
}

export default observer(About);
