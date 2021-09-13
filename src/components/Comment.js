import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Comments from './Comments';
import { Link } from 'react-router-dom';
import axio from '../app/AxiosConfig';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { useHistory } from 'react-router';
import { GrCheckboxSelected } from 'react-icons/gr';



const CommentStyles = styled.div`

    background-color: var(--background-s);
    height: max-content;
    padding: 1.2rem 2rem;
    margin: 1rem 0;
    max-width: 100%;
    .question-section{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .select-answer{
            height: 100%;
            background-color: green;
            font-size: 1.5rem;
            border-radius: 5px;
            padding: 0.5rem 1.5rem;
            cursor: pointer;
            * {
                pointer-events: none;
            }
            &:hover{
                color: var(--text-s);
            }

        }
    .vote-section{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 50px;
        margin: 1.2rem 2rem;
        font-size: 2.5rem;
        .icon {
        width: 3rem;
        height: 3rem;
        cursor: pointer;
        text-align: center;
        * {
          pointer-events: none;
        }
        &:hover{
            font-size: larger;
        }
      }
    }


    .ques{
        flex: 2;
        width: 100%;
        overflow: hidden;
        .info{
            font-size: 1.5rem;
            display: flex;
            justify-content: space-between;
            .author{
                border: 1px solid ;
                height: max-content;
                width: max-content;
                padding: 0.5rem;
            }
        }
        .heading{
            font-size: 1.8rem;
            margin: 1rem 0;
            display: flex;
            justify-content: space-between;
            text-align: center;
            .text{
                margin-top:1rem;
            }
            .tag{
                background-color: var(--primary);
                border-radius: 2px;
                padding: 0.2rem 0.5rem;
                font-size: 1.5rem;
                height: max-content;
                width: max-content;
            }
        }
        .url{
            font-size: 1.5rem;
            margin: 1rem 0;
            cursor: pointer;
            * {
                pointer-events: none;
            }
            &:hover{
                color: var(--text-s);
            }
        }
    }

    }

    
`;
export default function Comment({
    comment,
    selectable = false
    // "id": 15,
    // "text": "this can be solved easily",
    // "url": null,
    // "instant": "2021-09-11T17:58:06.706685Z",
    // "selected": false,
    // "upvotes": 0,
    // "downvotes": 0,
    // "creator": "ojasvi",
    // "creatorId": "1"
}

) {
    const user = useSelector(selectUser);
    const [vote, setVote] = useState(parseInt(comment.upvotes));
    const history = useHistory();
    const upVote = async () => {

        if (!user) {
            history.push("/login");
            return;
        }

        setVote(vote + 1);
        axio.post(`/comment/${comment.id}/upvote`)
            .then(response => {
                response.text();
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    const downVote = async () => {

        if (!user) {
            history.push("/login");
            return;
        }

        setVote(vote - 1);
        axio.post(`/comment/${comment.id}/upvote`)
            .then(response => {
                response.text()
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    const selectComment = async () => {

        if (!user) {
            history.push("/login");
            return;
        }
        const res = await axio.post(`/comment/${comment.id}/select/`)
        console.log(res);
        history.push("/question/"+res.data);

    }

    return (
        <CommentStyles>
            <div className="question-section">

                <div className="vote-section">
                    <div className="icon" onClick={() => upVote()}>
                        <IoIosArrowUp />
                    </div>
                    {vote}
                    <div className="icon" onClick={() => downVote()}>
                        <IoIosArrowDown />
                    </div>
                </div>
                <div className="ques">
                    <div className="info">
                        <div className="author">
                            <Link to={"/profile/" + comment.creatorId}>
                                {comment.creator}
                            </Link>
                        </div>
                        <div className="instant">
                            {
                                new Date(comment.instant).toGMTString()
                            }
                        </div>

                    </div>
                    <div className="heading">

                        <div className="text">

                            {
                                comment.text
                            }
                        </div>
                        {
                            comment.selected &&
                            <div className="tag">
                                {"Selected Answer"}
                            </div>
                        }
                    </div>
                    <Link to={comment.url} target="_blank" rel="noopener noreferrer" >

                        <div className="url">
                            {comment.url}

                        </div>
                    </Link>

                </div >
                {
                    !comment.selected && selectable && <div className="select-answer" onClick={()=>selectComment()}>
                    select answer
                    </div>
                }

            </div>
        </CommentStyles >
    )
}
