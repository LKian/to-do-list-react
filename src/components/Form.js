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
      <div className="footnote">
        Items on List: <span>{count}</span>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    padding: 10px 15px;
    border-radius: 5px;
  }
  .footnote {
    padding-bottom: 10px 0;
    margin-bottom: 10px;
    font-size: 0.8em;
    text-align: left;
    display: flex;
    align-items: center;
  }
  span {
    font-weight: bolder;
    margin-left: 10px;
  }
`;

export default Form;
