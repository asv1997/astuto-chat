import React, {ReactElement, useCallback, useState} from "react";
import styled from "styled-components";
import theme from "./theme";
import Text from "./Text";

const AccordianWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  width: 100%;
  margin-top: 10px;
`

const AccordianTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  hr{
    flex-grow: 1;
    border: 1px solid ${theme.colors.lightGrey};
    display: block;
    margin: 0 10px 0 10px;
  }
  .accordian-toggle{
    cursor: pointer;
  }
`

const AccordianContentWrapper = styled.div`
  width: 100%;
  margin-top: 8px;
`

type AccordianProps = {
    title: string,
    renderProp : () => ReactElement
}


const Accordian = ({title, renderProp}: AccordianProps) => {

    const [isContentVisible, setIsContentVisible] = useState(false);

    const onAccordianTitleClick = useCallback(() => {
        setIsContentVisible(prevState => !prevState);
    },[])

    return (
        <AccordianWrapper>
            <AccordianTitleWrapper>
                <Text fontColor="black" fontSize="small">{title}</Text>
                <hr/>
                <Text className="accordian-toggle" fontColor="black" fontSize="small" onClick={onAccordianTitleClick}>{isContentVisible ? 'Hide' : 'Show'}</Text>
            </AccordianTitleWrapper>
            {
                isContentVisible && (
                    <AccordianContentWrapper>
                        {renderProp()}
                    </AccordianContentWrapper>
                )
            }
        </AccordianWrapper>
    )
}

export default Accordian;