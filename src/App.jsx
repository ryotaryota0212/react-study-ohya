import React from "react";
import {useState} from "react";
import {InputTodo} from "./components/InputText";
import {InCompleteTodo} from "./components/InCompleteTodo";
import {CompleteTodo} from "./components/CompleteTodo";
import "./styles.css";

const App = () => {
  // const [showFlag, setShowFlag] = useState(true);
  // const [num, setNum] = useState(0);
  // const onClickButton = () => {
  //   setNum(num + 1);
  // };
  // const showFlagSwitch = () => {
  //   setShowFlag(!showFlag);
  // };
  const [todo, setTodo] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const addTodo = () => {
    if (todo === "") return;
    const newTodo = [...incompleteTodos, todo];
    setIncompleteTodos(newTodo);
    setTodo("");
  };
  const deleteTodo = (index) => {
    const newTodo = [...incompleteTodos];
    newTodo.splice(index, 1);
    setIncompleteTodos(newTodo);
  };
  const completeTodo = (index) => {
    const newIncompleteTodo = [...incompleteTodos];
    newIncompleteTodo.splice(index, 1);
    const newCompleteTodo = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodo);
    setCompleteTodos(newCompleteTodo);
  };
  const returnTodo = (index) => {
    const newCompleteTodo = [...completeTodos];
    newCompleteTodo.splice(index, 1);
    const newIncompleteTodo = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodo);
    setCompleteTodos(newCompleteTodo);
  };
  const changeText = (event) => setTodo(event.target.value);
  return (
    <>
      <InputTodo
        todo={todo}
        onChange={changeText}
        onClick={addTodo}
      ></InputTodo>
      <InCompleteTodo
        InCompleteTodo={incompleteTodos}
        finishTodo={completeTodo}
        deleteTodo={deleteTodo}
      ></InCompleteTodo>
      <CompleteTodo
        CompleteTodo={completeTodos}
        returnTodo={returnTodo}
      ></CompleteTodo>
    </>
  );
};

export default App;
