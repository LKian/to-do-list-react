import React, { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import List from "./List";
import Header from "./Header";
import Footer from "./Footer";

const ToDoList = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [toDo, setToDo] = useState([]);

  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (search !== "") {
      const countNew = count + 1;
      setCount(countNew);
      setToDo([...toDo, search]);
      setSearch("");
    } else {
      return;
    }
  };

  const deleteHandler = (e) => {
    console.log("deleted", e);

    setToDo(toDo.filter((item) => item !== e));
  };

  return (
    <StyledContainer>
      <Header />
      <Form
        onChange={searchHandler}
        onSubmit={submitHandler}
        count={count}
        search={search}
      />
      <List toDoList={toDo} deleteMe={deleteHandler} />
      <Footer />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 500px;
`;
export default ToDoList;
