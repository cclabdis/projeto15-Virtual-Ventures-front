import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-align: left;
  width: 100%;

  input {
    margin-top: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
  }

  span {
    color: red;
    font-size: 14px;
    margin-top: 5px;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;
