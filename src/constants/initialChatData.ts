import {ChatDataType} from "../types/chatData";

export const INITIAL_CHAT_DATA : ChatDataType[] = [
    {
        id: "abc",
        question: "How much data can I save?",
        answer : {
            headerContent : `<p>You can save your production content by <strong>25%</strong></p>`,
            additionalContent : {
                title : "Here are your top 2 saving areas",
                type: "CARD",
                content : {
                    type: "CARD",
                    answers : [
                        {
                            header : "Budget xyz logs 123 account",
                            description : `<p>This bucket doesnt use <strong>25%</strong> of the data</p>`
                        },
                        {
                            header : "Budget xyz logs 123 account",
                            description : `<p>This bucket doesnt use <strong>25%</strong> of the data <a href="#">Click here</a></p>`
                        }
                    ]
                }
            }
        }
    },
    {
        id: "xyz",
        question: "Give me the code snippet to fetch all the data",
        answer : {
            headerContent : `<p>You can write this query if you want</p>`,
            additionalContent : {
                title : "Query",
                type: "CODE_SNIPPET",
                content: {
                    type: "CODE_SNIPPET",
                    code: `<p>SELECT * FROM DATA</p>`
                }
            }
        }
    },

    {
        id: "123",
        question: "Give me the code snippet to fetch all the data",
        answer : {
            headerContent : `<p>You can write this query if you want</p>`,
            additionalContent : {
                title : "Pie chart",
                type: "IMAGE",
                content: {
                    type: "IMAGE",
                    imgUrl: "/assets/images/pie-chart.png"
                }
            }
        }
    }
]
