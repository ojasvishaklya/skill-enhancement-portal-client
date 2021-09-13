import React, { useEffect } from 'react'
import styled from 'styled-components'
import Comment from './Comment'


const CommentsStyles = styled.div`
    max-height: 500px;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }   

`;

export default function Comments({
    list = [],
    selectable=false,
}) {

    return (
        <CommentsStyles>
            {
                list.map((ele) => {
                    return <Comment comment={ele} selectable={selectable}/>
                })
            }
        </CommentsStyles>
    )
}

