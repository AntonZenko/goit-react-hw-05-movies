import styled from 'styled-components';

export const Form = styled.form`
  margin: 20px 20px;
`;

export const Input = styled.input`
  width: 300px;
  height: 20px;
  border-radius: 5px;
  padding: 2px 10px;
`;

export const Button = styled.button`
  // width: 100px;
  padding: 2px 20px;
  height: 30px;
  margin-left: 10px;
  // border: 1px solid #303030;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #ff0000;
    color: #fff;
  }
`;
