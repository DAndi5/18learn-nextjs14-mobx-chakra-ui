import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";

import { observer } from "mobx-react-lite";
import store from "./todos/store/store";

function TodoAdd() {
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input placeholder="New todo" value={store.newTodo} onChange={(evt) => (store.newTodo = evt.target.value)} />
      <Button onClick={() => store.addTodo()}>Add Todo</Button>
    </Grid>
  );
}

export default observer(TodoAdd);
