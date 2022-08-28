import React from "react";

export const CompleteTodo = (props) => {
  const {CompleteTodo, returnTodo} = props;
  return (
    <div className="complete">
      <p className="title">完了したTODO</p>
      <ul>
        {CompleteTodo.map((todo, index) => {
          return (
            <div key={todo} className="list">
              <li>{todo}</li>
              <button onClick={() => returnTodo(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
