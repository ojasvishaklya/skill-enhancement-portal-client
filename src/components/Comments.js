import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'


const CommentsStyles = styled.div`


`;

export default function Comments() {
    return (
        <CommentsStyles>
            <div className="container">
                <Comment />
                <Comment />
                <Comment />
            </div>
        </CommentsStyles>
    )
}

