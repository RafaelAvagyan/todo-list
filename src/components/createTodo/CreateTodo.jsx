import React, { useState } from "react";

const CreateTodo = ({ setTodos }) => {
  const [inputName, setInputName] = useState("");

  const handleAddNewTodo = (title) => {
    setTodos((prev) => [
      {
        id: Math.random(42).toString(),
        title,
        isChecked: false,
      },
      ...prev,
    ]);
    setInputName("");
  };
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20">
      <input
        type="text"
        onChange={(e) => setInputName(e.target.value)}
        value={inputName}
        onKeyUp={(e) => e.key === "Enter" && handleAddNewTodo(inputName)}
        className="bg-transparent w-full border-none outline-none"
        placeholder="Add a task..."
      />
    </div>
  );
};

export default CreateTodo;
