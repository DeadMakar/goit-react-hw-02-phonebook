import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;

  div {
    margin-bottom: 10px;
  }

  label {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
  }

  input {
    padding: 8px;
    width: 100%;
    font-size: 14px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #45a049;
  }
`;

export const Error = styled(ErrorMessage)`
  color: red;
`;
