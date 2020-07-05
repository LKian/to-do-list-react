import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [toDo, setToDo] = useState(["first item"]);

  return (
    <div>
      <h1>To Do List</h1>
    </div>
  );
};

export default Header;
