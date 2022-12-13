import React, { useState } from "react";

import TodoItem from "../todoItem/TodoItem";
import CreateTodo from "../createTodo/CreateTodo";

const data = [
  {
    id: 1,
    title: "Starting to work",
    isChecked: false,
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const findId = copy.find((el) => el.id === id);
    findId.isChecked = !findId.isChecked;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8">Todo List</h1>
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            changeTodo={changeTodo}
            removeTodo={removeTodo}
          />
        );
      })}
      <CreateTodo setTodos={setTodos} />
    </div>
  );
};

export default TodoList;
