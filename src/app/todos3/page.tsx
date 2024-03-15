'use client'
import React from "react";
// import TodosCompIndex from "../components3/index";
import Navbar2 from "@/app/components/layout/navbar/navbartodolist";
import TodoIndex from "@/app/components3/todos/ui";
import todoStore, { ITodoModel } from "@/app/components3/todos/controller/todoStore";

const MyTodos = ({ todos }: { todos: ITodoModel[] }) => {

  return (
    <>
      <Navbar2/>
      <TodoIndex myTodos={todos}></TodoIndex>
    </>
  );
};

export default MyTodos;
