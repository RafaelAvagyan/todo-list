import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";

import Lyaout from "./components/lyaout/Lyaout";
import TodoList from "./components/todo/TodoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Lyaout>
      <TodoList />
    </Lyaout>
  </React.StrictMode>
);
