import React from "react";

export const InputTodo = (props) => {
  const {todo, onChange, onClick} = props;
  return (
    <div className="input">
      <input
        type="text"
        id="add-text"
        placeholder="TODOを入力"
        value={todo}
        onChange={onChange}
      />
      <button id="add-button" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
