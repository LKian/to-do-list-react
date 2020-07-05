import React from "react";
import styled from "styled-components";

const List = ({ count, toDoList }) => {
  const deleteMe = () => {
    console.log("deleted");
  };

  return (
    <StyledList>
      <ul>
        {toDoList.map((toDoItem) => (
          <li>
            <span onClick={deleteMe}>x</span>
            {toDoItem}
          </li>
        ))}
      </ul>
    </StyledList>
  );
};

const StyledList = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  span {
    margin-right: 25px;
  }
  li {
    border: 4px dotted red;
  }
`;

export default List;
