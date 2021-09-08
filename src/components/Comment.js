import React from 'react'
import styled from 'styled-components'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Comments from './Comments';



const QuestionStyles = styled.div`

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
                height: max-content;
                width: max-content;
                border: 1px solid ;
                padding: 0.5rem;
            }
        }
        .heading{
            font-size: 2rem;
            margin: 1rem 0;
        }
        .desc{
            font-size: 1.5rem;
            margin: 1rem 0;
        }
    }

    }
    .comment-section{
        
        .load-comments{
            width: 100%;
            font-size: 1.5rem;
            cursor: pointer;
            text-align: center;
            * {
                pointer-events: none;
            }
            margin-top:1rem;
        }
    }
    
`;
export default function Comment() {
    return (
        <QuestionStyles>
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
                        CSS display: inline vs inline-block
                    </div>
                    <div className="desc">
                        In CSS, display can have values of inline and inline-block. Can anyone explain in detail the difference between inline and inline-block?I searched everywhere, the most detailed explanation tells me inline-block is placed as inline, but behaves like block. But it does not explain what exactly "behave as a block" means. Is it any special feature?
                    </div>
                </div >
            </div>
        </QuestionStyles >
    )
}
