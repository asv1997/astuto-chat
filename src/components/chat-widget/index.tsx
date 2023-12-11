import React, {useCallback, useState} from "react";
import styled from "styled-components"
import Card from "../design-system/Card";
import ImgTitleHeader from "../design-system/ImgTitleHeader";
import Accordian from "../design-system/Accordian";
import theme from "../design-system/theme";
import {ChatDataType, AdditionalContent, AnswerType} from "../../types/chatData";
import CardAnswer from "./CardAnswer";
import CodeAnswer from "./CodeAnswer";
import ImageAnswer from "./ImageAnswer";
import Input from "../design-system/Input";
import {INITIAL_CHAT_DATA} from "../../constants/initialChatData";

const ChatWidgetWrapper = styled(Card)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  background-color: ${theme.colors.lightGrey};
`

const ChatContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 550px;
  gap: 15px;
  overflow-y: scroll;
  padding-bottom: 35px;
`

const InputWrapper = styled.div`
  position: absolute;
  bottom: 14px;
  width: 90%;
  padding: 0 30px;
`

const PrompterQuestionBanner = styled(Card)`
  background-color: ${theme.colors.mediumGrey};
  box-shadow: unset;
`

const AnswerContainer = styled(Card)`
  background-color: ${theme.colors.white};
`

// helper function to generate Question Content
const generateChatPrompt = (question: string) => {
    const randomIndex = Math.floor(Math.random() * 3);
    const chat = {...INITIAL_CHAT_DATA[randomIndex]};
    chat["id"] = Date.now().toString();
    chat["question"] = question;
    return chat;
}

// Render prop to render different answer Types
const renderAnswer = (answer:AdditionalContent<AnswerType>) => {
    if(answer.type === "CARD" && "answers" in answer.content){
       return <CardAnswer answerData={answer.content.answers} />
    }
    else if(answer.type === "CODE_SNIPPET" && "code" in answer.content){
        return <CodeAnswer answer={answer.content.code} />
    }
    else if(answer.type === "IMAGE" && "imgUrl" in answer.content){
        return <ImageAnswer imgUrl={answer.content.imgUrl} />
    }
    return <></>
}



const ChatWidget = () => {

    const [chatData, setChatData] = useState<ChatDataType[]>([]);

    const [inputValue, setInputValue] = useState<string>('');

    const onInputQueryChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    },[])

    const onInputKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter" && inputValue.trim().length){
            const chat = generateChatPrompt(inputValue);
            setChatData((prevState) => [...prevState, chat]);
            setInputValue("");
        }
    },[inputValue])

    return (
        <ChatWidgetWrapper>
            <ChatContainer>
                {
                    chatData.map((chat) => {
                        return (
                            <React.Fragment key={chat.id}>
                                <PrompterQuestionBanner>
                                    <ImgTitleHeader imgUrl="/assets/images/profile-photo.png" content={chat.question} isHtmlContent={false} />
                                </PrompterQuestionBanner>
                                <AnswerContainer>
                                    <ImgTitleHeader imgUrl="/assets/images/chat-logo.png" content={chat.answer.headerContent} isHtmlContent={true} />
                                    {(!!chat.answer.additionalContent) && <Accordian title={chat.answer.additionalContent.title} renderProp={() => renderAnswer(chat.answer.additionalContent as AdditionalContent<AnswerType>)} />}
                                </AnswerContainer>
                            </React.Fragment>
                        )
                    })
                }
            </ChatContainer>
            <InputWrapper>
                <Input onKeyDown={(event) => onInputKeyDown(event)} onChange={(event) => onInputQueryChange(event)} value={inputValue}  placeholder="Start typing your query here ..." />
            </InputWrapper>
        </ChatWidgetWrapper>
    )
}

export default ChatWidget;