// 'use client'
import {observer} from "mobx-react-lite";
import {useState} from "react";
import {
  Button,
  Input,
  Flex,
  Checkbox,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import todoStore from "@/app/components3/todos/controller/todoStore";


const Users = observer(({store}) => {
  const [inputValue, setInputValue] = useState("");
  const addUser = () => {
    store.addUser(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <div>Total: {store.total}</div>

      <Flex pt={2}>
        <Input
          position="static"
          mx={2}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          position="static"
          onClick={addUser}
        >
          Add user
        </Button>

      </Flex>

      <div>
        {store.users.map((user, index) => (
          <Flex pt={2} key={index}> {user.name}</Flex>
        ))}
      </div>
    </div>
  );
});
export default Users;
