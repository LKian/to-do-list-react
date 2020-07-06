import React from "react";
import ToDoList from "./components/ToDoList";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <StyledApp className="App">
      <ToDoList />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  background-color: #1d1d1d;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  .App-link {
    color: #61dafb;
  }
`;

export default App;
