'use clients'
import {Box} from "@chakra-ui/react";
import React from "react";
// import {ITodoModel} from "/imodels/ITodoModel";
// import todosStore from "../store/todosStore";
// import AddTodo from "./AddTodo";
// import TodosList from "./TodosList";

import TopBar from './TopBar';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

// const TodosCompIndex = ({myTodosList}: { myTodosList: ITodoModel[] }) => {
const TodosCompIndex = () => {

  // todosStore.todosList = myTodosList;

  return (
    <>
      <Box maxWidth="8xl" margin="auto" p={5}>
        {/*<TodosList />*/}
        {/*<AddTodo />*/}

        <TodoList/>
        <TodoAdd/>
        <TopBar/>
      </Box>
    </>
  );
};

export default TodosCompIndex;
