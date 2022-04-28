import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, onClickReturn, existThanFive } = props;
  return (
    <div className="complete-area">
      <p className="title">completed todo</p>
      {completeTodos.map((x, i) => {
        return (
          <ul>
            <div key={x} className="list-row">
              <li>{x}</li>
              <button onClick={() => onClickReturn(i)} disabled={existThanFive}>
                retrurn
              </button>
            </div>
          </ul>
        );
      })}
    </div>
  );
};
