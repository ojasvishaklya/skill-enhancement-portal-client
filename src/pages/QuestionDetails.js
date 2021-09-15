import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Comments from '../components/Comments';
import MakeComment from '../components/MakeComment';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import axio from '../app/AxiosConfig';
import MyLoader from '../components/MyLoader';
import Modal from 'react-awesome-modal';
import { useParams } from 'react-router';
import Question from '../components/Question';
import Button from '../components/Button';



const QuestionDetailsStyles = styled.div`

    background-color: var(--background-s);
    height: max-content;
    padding: 1.2rem 2rem;
    margin: 1rem 0;
    max-width: 100%;

    .question-section{
        display: flex;
        align-items: center;
        justify-content: flex-start;
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
            font-size: 2rem;
            margin: 1rem 0;
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            text-align: center;
            .title{
                * {
                    pointer-events: none;
                }
                margin-top:1rem;

                &:hover{
                    color: var(--text-s);
                }
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
        .desc{
            font-size: 1.5rem;
            margin: 1rem 0;
        }
    }

    }

    .comment-section{
        .heading{
            font-size: 2rem;
            margin: 1rem 0;
        }
        .clickable{
            cursor: pointer;
            text-align: center;
            &:hover{
                color: var(--text-s);
            }
        }
    }

    @media only screen and (max-width: 768px){
        .question-section{
            flex-direction: column-reverse;
            width: 100%;
            .vote-section{
                flex-direction: row;
                align-items: center;
                justify-content: space-evenly;
            }
            .heading{
                flex-direction: column;
                .title{
                    text-align: start;
                    margin-bottom: 1rem;
                }
            }
            .info{
                flex-direction: column;
                .author{
                    font-size: 2rem;
                    margin-bottom: 2rem;
                }
            }
            .desc{
                text-align: start;
            }
            
        }
    }
    
`;
export default function QuestionDetails() {
    const { id } = useParams();
    const user = useSelector(selectUser);
    const [isMe, setisMe] = useState(false);
    const [loading, setLoading] = useState(true);
    const [question, setQuestion] = useState({});
    const [modal, setModal] = useState(false)
    const [makeComment, setMakeComment] = useState(false);

    // "id": 2,
    // "postName": "flutter error",
    // "url": null,
    // "description": ""
    // "tag": "flutter",
    // "tagId": "5",
    // "comments": [],
    // "upvotes": 3,
    // "downvotes": 0,
    // "creator": "ojasvi",
    // "creatorId": "1",
    // "instant": "2021-08-25T18:36:12.921575Z"

    const [vote, setVote] = useState(0);
    const history = useHistory();
    const upVote = async () => {

        if (!user) {
            history.push("/login");
            return;
        }

        setVote(vote + 1);
        axio.post(`/ques/${question.id}/upvote`)
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
        axio.post(`/ques/${question.id}/upvote`)
            .then(response => {
                response.text()
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    const deleteQuestion = async () => {

        if (!user) {
            history.push("/login");
            return;
        }

        const res = await axio.delete(`/ques/${question.id}`)
        console.log(res);
        history.push("/");

    }


    useEffect(() => {
        async function fetchData() {

            const res = await axio.get(`/ques/${id}/`);
            setQuestion(res.data);
            setVote(parseInt(res.data.upvotes));
            setisMe(res.data.creatorId === user.id);
            console.log(res.data);
            setLoading(false);
        }

        fetchData();

        return () => {
        }
    }, [])

    return loading ?
        <MyLoader text="Loading Question" />
        :

        <div className="container">
            {
                isMe &&
                <div className="delete-button" onClick={() => deleteQuestion()}>
                    <Button btnText="Close Question" />
                </div>

            }
            <QuestionDetailsStyles>


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
                                <Link to={"/profile/" + question.creatorId}>
                                    {question.creator}
                                </Link>
                            </div>

                            <div className="instant">
                                {
                                    new Date(question.instant).toGMTString()
                                }
                            </div>

                        </div>
                        <div className="heading">
                            <Link
                                to={"/question/" + question.id}
                            >
                                <div className="title">

                                    {
                                        question.postName
                                    }
                                </div>
                            </Link>
                            <div className="tag">
                                {question.tag}
                            </div>
                        </div>
                        <div className="desc">
                            {question.description}
                        </div>
                        {
                            question.url && <div className="desc">
                                Refrence url : {question.url}
                            </div>
                        }
                    </div >
                </div>

                <div className="comment-section">
                    <hr />
                    <div className="heading" >
                        Comments:
                    </div>
                    {
                        question.comments && !question.comments.length &&

                        <div className="heading clickable" onClick={() => {
                            setMakeComment(!makeComment);
                        }}>
                            No comments yet lets add some comments
                            <br />
                            <br />
                        </div>
                    }
                    <div className="container" >
                        {
                            <Comments list={question.comments} selectable={isMe}/>
                        }
                    </div>
                    <hr />
                    <div className="comment-form" style={{ display: makeComment ? "block" : "none" }} >
                        <MakeComment q_id={question.id} />
                    </div>
                    <div className="heading clickable" onClick={() => {
                        setMakeComment(!makeComment);
                    }}>
                        Add Comment
                    </div>
                </div>


            </QuestionDetailsStyles >
        </div>

}
