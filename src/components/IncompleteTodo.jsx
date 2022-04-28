import React from "react";

export const IncompleteTodo = (props) => {
  const { todos, onClickComp, onClickDel } = props;

  return (
    <div className="incomplete-area">
      <p className="title">in-complete todo</p>
      {todos.map((x, index) => {
        return (
          <ul>
            <div key={x} className="list-row">
              <li>{x}</li>
              <button onClick={() => onClickComp(index)}>complete</button>
              <button onClick={() => onClickDel(index)}>delete</button>
            </div>
          </ul>
        );
      })}
    </div>
  );
};
