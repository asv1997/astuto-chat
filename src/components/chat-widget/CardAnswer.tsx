import React from "react";
import {Card as CardType} from "../../types/chatData";
import styled from "styled-components";
import Card from "../design-system/Card";
import theme from "../design-system/theme";
import Text from "../design-system/Text";
import HtmlContent from "../design-system/HtmlContent";

const CardWrapper = styled(Card)`
  background-color: white;
  border: 1px solid ${theme.colors.darkGreen};
  margin-bottom: 14px;
  .card-header{
    margin-bottom: 14px;
  }
`

const CardAnswer = ({answerData}: {answerData: CardType[]}) => {
    return (
        <>
            {
                answerData.map((answer, index) => {
                    return (
                        <CardWrapper key={index}>
                            <Text fontWeight="bold" className="card-header">{answer.header}</Text>
                            <HtmlContent dangerouslySetInnerHTML={{__html: answer.description}} />
                        </CardWrapper>
                    )
                })
            }
        </>
    )
}

export default CardAnswer;