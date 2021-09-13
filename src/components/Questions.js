import React from 'react'
import styled from 'styled-components'
import Question from './Question'


const QuestionsStyles = styled.div`
    max-height: 700px;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export default function Questions({
    list=[]
}) {
    return (
        <QuestionsStyles >
                {
                    list.map((ele)=>{
                       return <Question question={ele}/>
                    })
                }
        </QuestionsStyles>
    )
}

