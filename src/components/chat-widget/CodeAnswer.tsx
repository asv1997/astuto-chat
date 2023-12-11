import React from "react";
import styled from "styled-components"
import Card from "../design-system/Card";
import theme from "../design-system/theme";
import HtmlContent from "../design-system/HtmlContent";

const CodeSnippet = styled(Card)`
  background-color: ${theme.colors.black};
`

const CodeAnswer = ({answer} : {answer:string}) => {
    return (
        <CodeSnippet>
            <HtmlContent className="code-block" dangerouslySetInnerHTML={{__html: answer}} />
        </CodeSnippet>
    )
}

export default CodeAnswer;