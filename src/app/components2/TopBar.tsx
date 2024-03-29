import * as React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import store from "./todos/store/store";

/*
JSON source: https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json
*/

function TopBar() {
  const onLoad = () => store.load("https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json")
  return (
    <Grid pt={2}  templateColumns="1fr 1fr" columnGap="3">
    {/*<Grid pt={2} templateColumns="1fr 1fr" columnGap="3">*/}
      {/*<ColorModeSwitcher />*/}
      <Button onClick={() => onLoad()}>Load</Button>
    </Grid>
  );
}

export default TopBar;
