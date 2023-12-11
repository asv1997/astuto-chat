import styled from "styled-components";
import theme from "./theme";


const Input = styled.input`
  height: 30px;
  outline: none;
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 10px;
  color: ${theme.colors.black};
  &:focus{
    outline: none;
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`

export default Input;

