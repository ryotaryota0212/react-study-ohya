import React from "react";

export const InCompleteTodo = (props) => {
  const {InCompleteTodo, finishTodo, deleteTodo} = props;
  return (
    <div className="todo">
      <p className="title">未完了のTODO</p>
      <ul id="todo-list">
        {InCompleteTodo.map((todo, index) => {
          return (
            <div key={todo} className="list">
              <li>{todo}</li>
              <button onClick={() => finishTodo(index)}>完了</button>
              <button onClick={() => deleteTodo(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
