import React from 'react'
import styled from 'styled-components'
import Question from './Question'


const QuestionsStyles = styled.div`


`;

export default function Questions() {
    return (
        <QuestionsStyles>
                <Question />
                <Question />
                <Question />
        </QuestionsStyles>
    )
}

