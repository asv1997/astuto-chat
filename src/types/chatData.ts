export type CodeSnippetAnswer = {
    type: "CODE_SNIPPET";
    code: string;
}

export type Card = {
    header: string;
    description: string;
};

export type CardAnswer = {
    type: "CARD"
    answers: Array<Card>
}


export type DescriptiveAnswer = {
    type: "DESCRIPTIVE";
    description: string;
};

export type ImageAnswer = {
    type: "IMAGE";
    imgUrl: string;
};

export type AnswerType = CardAnswer | DescriptiveAnswer | ImageAnswer | CodeSnippetAnswer

export type AdditionalContent<T extends AnswerType> = {
    title: string;
    type: T["type"];
    content: T;
};

export type Answer<T extends AnswerType> = {
    headerContent: string;
    additionalContent?: AdditionalContent<T>;
};

export type ChatDataType = {
    id: string;
    question: string;
    answer: Answer<AnswerType>;
};
