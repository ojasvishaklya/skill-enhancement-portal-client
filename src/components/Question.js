import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Comments from './Comments';
import { Link } from 'react-router-dom';
import axio from '../app/AxiosConfig';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { useHistory } from 'react-router';



const QuestionStyles = styled.div`

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
export default function Question({
    question
    // private Long id;
    // private String postName;
    // private String url;
    // private String description;
    // private String tag;
    // private int upvotes;
    // private int downvotes;
    // private String creator;
    // private String creatorId;
}

) {
    const user = useSelector(selectUser);
    const [vote, setVote] = useState(parseInt(question.upvotes));
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

    return (
        <QuestionStyles>
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

                        <div className="title" onClick={() => {
                            if (!user) {
                                history.push("/login");
                                return;
                            }
                            history.push("/question/" + question.id);


                        }}>

                            {
                                question.postName
                            }
                        </div>
                        <div className="tag">
                            {question.tag}
                        </div>
                    </div>
                    <div className="desc">
                        {question.description}
                    </div>
                </div >
            </div>
        </QuestionStyles >
    )
}
