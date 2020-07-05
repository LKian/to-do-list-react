import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import Header from "./Header";

const ToDoList = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [toDo, setToDo] = useState(["first item"]);

  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const countNew = count + 1;
    setCount(countNew);
    setToDo([...toDo, search]);
    setSearch("");
  };

  return (
    <div>
      <Header />
      <Form
        onChange={searchHandler}
        onSubmit={submitHandler}
        count={count}
        search={search}
      />
      <List toDoList={toDo} />
    </div>
  );
};

export default ToDoList;
