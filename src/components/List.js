import React from "react";
import styled from "styled-components";

const List = ({ count, toDoList, deleteMe }) => {
  return (
    <StyledList>
      {toDoList.map((toDoItem, index) => (
        <li>
          <span onClick={() => deleteMe(toDoItem)}>x</span>
          {toDoItem}
        </li>
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    display: flex;
    border-radius: 5px;
    padding: 5px;
    margin: 5px 0;
    align-items: center;
    background-color: #282c34;
  }
  span {
    margin-right: 25px;
    color: red;
    padding: 5px;
  }
  span:hover {
    cursor: pointer;
  }
`;

export default List;
