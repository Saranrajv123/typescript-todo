import React, { Fragment, useState } from "react";
import "./App.css";

type fromElem = React.FormEvent<HTMLFormElement>;
interface ITodo {
  text: string;
  complete: boolean;
}

const App = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (event: fromElem): void => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button> Add Todo </button>
      </form>

      <section>
        {todos.map((item: ITodo, index: number) => {
          return (
            <Fragment key={index}>
              <div>{item.text}</div>
              <button onClick={() => completeTodo(index)}>
                {item.complete ? "Incomplete" : "complete"}
              </button>
            </Fragment>
          );
        })}
      </section>
    </Fragment>
  );
};

export default App;
