import React from "react";
import styled from "styled-components";
import Card from "../design-system/Card";
import theme from "../design-system/theme";

const ImageAnswerWrapper = styled(Card)`
  height: 120px;
  background-color: ${theme.colors.mediumGrey};
  justify-content: center;
  align-items: center;
  img{
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

const ImageAnswer = ({imgUrl}:{imgUrl:string}) => {
    return (
        <ImageAnswerWrapper>
            <img src={imgUrl} alt="chat-prompt"/>
        </ImageAnswerWrapper>
    )
}

export default ImageAnswer;