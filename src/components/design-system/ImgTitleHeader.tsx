import React from "react";
import styled from "styled-components";
import HtmlContent from "./HtmlContent";
import Text from "./Text";
import theme from "./theme";


const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  column-gap: 10px;
  .display-small-pic{
    height: 16px;
    width: 16px;
    object-fit: contain;
    flex-shrink: 0;
    flex-grow: 0;
    border-radius: 4px;
  }
`

type ImgTitleHeaderType  = {
    imgUrl: string,
    content: string,
    isHtmlContent: boolean
}

const ImgTitleHeader = ({imgUrl, content, isHtmlContent} : ImgTitleHeaderType) => {
    return (
        <Wrapper>
            <img className="display-small-pic" src={imgUrl} alt="header-img" />
            {
                isHtmlContent ? (
                        <HtmlContent dangerouslySetInnerHTML={{__html:content}} />
                    ) :  (
                    <Text fontSize="medium" fontWeight="medium" color={theme.colors.black}>
                        {content}
                    </Text>
                )
            }
        </Wrapper>
    )
}

export default ImgTitleHeader;