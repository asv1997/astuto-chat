import styled from "styled-components";
import theme from "./theme";

const HtmlContent = styled.div`
  width: 100%;
  font-size: ${theme.fontSize.medium};
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeight.medium};
  a {
    color: ${theme.colors.green};
    &:hover {
      color: ${theme.colors.green};
    }
  }
  &.code-block{
    font-family: "Courier New",serif;
    color: ${theme.colors.white};
    font-weight: ${theme.fontWeight.bold};
  }
`

export default HtmlContent;
