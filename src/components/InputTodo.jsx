import React from "react";

export const InputTodo = (props) => {
  const { a, b, c } = props;
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={a} onChange={b} />
        <button onClick={c}>追加</button>
      </div>
    </>
  );
};
