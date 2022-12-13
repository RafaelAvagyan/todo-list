import React from "react";

import cn from "classnames";

import { BsTrash } from "react-icons/bs";

import Check from "./Check";

const TodoItem = ({ item, changeTodo, removeTodo }) => {
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
      <button className="flex items-center" onClick={() => changeTodo(item.id)}>
        <Check isChecked={item.isChecked} />
        <span
          className={cn({
            "line-through": item.isChecked,
          })}
        >
          {item.title}
        </span>
      </button>
      <button onClick={() => removeTodo(item.id)}>
        <BsTrash
          size={24}
          className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"
        />
      </button>
    </div>
  );
};

export default TodoItem;
