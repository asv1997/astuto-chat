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

/*

Readme!!

1. Every component in this project is strictly typed
2. Basic functionality is that when you enter a prompt, an answer of a random type will be picked and displayed
3. There are 3 types of answer types
    a) Card Based description
    b) Coding Snippet
    c) Image based Answer
4. No external css library used, styled-components library was used to write css in js


 */


function App() {
   return (
    <AppWrapper>
        <ChatWidget/>
    </AppWrapper>
  );
}

export default App;
