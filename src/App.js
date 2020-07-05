import React from "react";
import ToDoList from "./components/ToDoList";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <StyledForm className="App">
      <ToDoList />
    </StyledForm>
  );
}

const StyledForm = styled.div`
  background-color: #282c34;
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
