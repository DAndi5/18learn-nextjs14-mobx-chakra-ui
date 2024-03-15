import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import todoStore, { ITodoModel } from "../controller/todoStore";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

// interface ITodoIndexProps {
//   myTodos: ITodoModel[];
// }

const TodoIndex = ({ myTodos }: { myTodos: ITodoModel[] }) => {
  todoStore.todos = myTodos;
  todoStore.myTodo = todoStore.resetTodoData();
  return (
    <>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <a href="https://github.com/lifeofcode01/learn-next" target='_blank'> This is the same project from Github </a> and
        <a href="https://learn-next-js-alpha.vercel.app/todos" target='_blank'> Demo </a>
        <TodoList />
        <TodoAdd />
      </Box>
    </>
  );
};
// const TodoIndex: NextPage<ITodoIndexProps> = ({ myTodos }) => {
//   return (
//     <Box maxWidth="8xl" margin="auto" p={5}>
//       <TodoList />
//       <TodoAdd />
//     </Box>
//   );
// };

export default TodoIndex;
