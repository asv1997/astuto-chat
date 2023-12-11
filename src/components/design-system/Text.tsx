import styled from "styled-components"
import {Theme} from "../../types/theme";
import theme from "./theme";

interface TextProps {
    fontSize?: keyof Theme["fontSize"];
    fontColor?: keyof Theme["colors"];
    fontWeight?: keyof Theme["fontWeight"];
}

const Text = styled.p<TextProps>`
  color: ${(props) => theme.colors[props.fontColor || 'black']};
  font-size: ${(props) => theme.fontSize[props.fontSize || 'medium']};
  font-weight: ${(props) => theme.fontWeight[props.fontWeight || 'medium']};
`

export default Text;
