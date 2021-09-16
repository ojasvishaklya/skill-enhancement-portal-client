import React from 'react'
import styled from 'styled-components'
import Question from './Question'
import StackQuestion from './StackQuestion';


const QuestionsStyles = styled.div`
    max-height: 700px;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export default function Questions({
    list=[],
    stack=false
}) {
    return (
        <QuestionsStyles >
                {stack ?
                    list.map((ele)=>{
                       return <StackQuestion question={ele}/>
                    }) :

                    list.map((ele)=>{
                        return <Question question={ele}/>
                     })
                }
        </QuestionsStyles>
    )
}

