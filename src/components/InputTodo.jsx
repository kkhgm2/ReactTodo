import React from "react";

export const InputTodo = (props) => {
  const { a, b, c, d } = props;
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={a} onChange={b} disabled={d} />
        <button onClick={c} disabled={d}>
          追加
        </button>
      </div>
    </>
  );
};
