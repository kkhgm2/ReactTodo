import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const clickAddText = (event) => {
    if (todoText === "") return;
    setIncompleteTodos([...incompleteTodos, todoText]);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTods = [...incompleteTodos];
    newTods.splice(index, 1);
    setIncompleteTodos(newTods);
  };

  const onClickComplete = (index) => {
    const newTods = [...incompleteTodos];
    const targetTodo = newTods.splice(index, 1);
    setIncompleteTodos(newTods);

    const newT = [...completeTodos, targetTodo];
    setCompleteTodos(newT);
  };

  const onClickReturn = (index) => {
    const newTods = [...completeTodos];
    const target = newTods.splice(index, 1);
    setCompleteTodos(newTods);

    const newT = [...incompleteTodos, target];
    setIncompleteTodos(newT);
  };

  return (
    <>
      <InputTodo a={todoText} b={onChangeTodoText} c={clickAddText} />
      <IncompleteTodo
        todos={incompleteTodos}
        onClickComp={onClickComplete}
        onClickDel={onClickDelete}
      />
      <CompleteTodo
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
};
