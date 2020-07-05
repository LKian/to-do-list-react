import React from "react";
import styled from "styled-components";

const Form = ({ count, onSubmit, search, onChange }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <input
        value={search}
        onChange={onChange}
        placeholder='Type your "to do"'
      />
      <p>form count is {count}</p>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  text-align: center;
  input {
    padding: 10px 15px;
    border-radius: 5px;
  }
`;

export default Form;
