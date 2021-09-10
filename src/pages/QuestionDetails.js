import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Comments from '../components/Comments';
import MakeComment from '../components/MakeComment';



const QuestionDetailsStyles = styled.div`

    background-color: var(--background-s);
    height: max-content;
    padding: 1.2rem 2rem;
    margin: 1rem 0;
    .question-section{
        display: flex;
        align-items: center;
    .vote-section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100px;
        margin: 1.2rem 2rem;
        font-size: 2.5rem;
        .icon {
        display: block;
        width: 3rem;
        height: 3rem;
        margin: 0 0 0 auto;
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
        
        .load-comments{
            margin-top: 1rem;
            width: 100%;
            font-size: 1.5rem;
            text-align: center;
        }
        .comment-list{
            transition: opacity 1s ease-out;
            opacity: 0;
            height: 0;
            overflow: hidden;
            .show {
                opacity: 1;
                height: auto;
            }
        }
    }
    .make-comment{

        
        .load-comments{
            width: 100%;
            font-size: 1.5rem;
            cursor: pointer;
            text-align: center;
            * {
                pointer-events: none;
            }
            margin:1rem 0;

            &:hover{
                color: var(--text-s);
            }
        }
        .comment-form{
            width: 100%;
            /* background-color: var(--background);
            padding: 2rem 0; */
}
        }
    }
    
`;
export default function QuestionDetails() {
    const [comments, setComments] = useState(true);
    const [makeComment, setMakeComment] = useState(false);

    return (
        <div className="container">
            <QuestionDetailsStyles>
                <div className="question-section">

                    <div className="vote-section">
                        <div className="icon">
                            <IoIosArrowUp />
                        </div>
                        0
                        <div className="icon">
                            <IoIosArrowDown />
                        </div>
                    </div>
                    <div className="ques">
                        <div className="info">
                            <div className="author">
                                Ojasvi Shaklya
                            </div>
                            <div className="instant">
                                22-03-2021
                            </div>

                        </div>
                        <div className="heading">
                            <div className="title">
                                CSS display: inline vs inline-block
                            </div>
                            <div className="tag">
                                CSS
                            </div>
                        </div>
                        <div className="desc">
                            In CSS, display can have values of inline and inline-block. Can anyone explain in detail the difference between inline and inline-block?I searched everywhere, the most detailed explanation tells me inline-block is placed as inline, but behaves like block. But it does not explain what exactly "behave as a block" means. Is it any special feature?
                        </div>
                    </div >
                </div>

                <div className="comment-section">
                    <hr />
                    <div className="load-comments" >
                        Comments
                    </div>

                    <div className={comments ? "show" : "comment-list"} >
                        <Comments />
                    </div>
                </div>
                <div className="make-comment">
                    <hr />
                    <div  className="comment-form" style={{display: makeComment ?"block" :"none"}} >
                        <MakeComment />
                    </div>
                    <div className="load-comments" onClick={() => {
                        setMakeComment(!makeComment);
                    }}>
                        Add Comment
                    </div>
                </div>
            </QuestionDetailsStyles >
        </div>
    )
}
