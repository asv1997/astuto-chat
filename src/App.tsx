import React from 'react';
import styled from "styled-components"
import ChatWidget from "./components/chat-widget";
import {ChatDataType} from "./types/chatData";

const AppWrapper = styled.div`
  width: 100vw;
  padding: 60px 300px;
  @media screen and (max-width: 700px) {
    padding: 50px 20px;
  }
`


function App() {
   return (
    <AppWrapper>
        <ChatWidget/>
    </AppWrapper>
  );
}

export default App;
