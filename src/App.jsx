import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa", "bbbb"]);
  const [completeTodos, setCompleteTodos] = useState(["vvvvvvvvvvv"]);

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
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={clickAddText}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">in-complete todo</p>
        {incompleteTodos.map((x, index) => {
          return (
            <ul>
              <div key={x} className="list-row">
                <li>{x}</li>
                <button onClick={() => onClickComplete(index)}>complete</button>
                <button onClick={() => onClickDelete(index)}>delete</button>
              </div>
            </ul>
          );
        })}
      </div>

      <div className="complete-area">
        <p className="title">completed todo</p>
        {completeTodos.map((x, i) => {
          return (
            <ul>
              <div key={x} className="list-row">
                <li>{x}</li>
                <button onClick={() => onClickReturn(i)}>retrurn</button>
              </div>
            </ul>
          );
        })}
      </div>
    </>
  );
};
