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
                text-align: start;

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
export default function StackQuestion({
    question
    // answer_count: 0
    // content_license: "CC BY-SA 4.0"
    // creation_date: 1631783692
    // is_answered: false
    // last_activity_date: 1631783692
    // link: "https://stackoverflow.com/questions/69205631/spring-jpa-mysql-deadlock-found-on-commit-but-the-deadlock-is-not-registered-i"
    // owner: {account_id: 16565794, reputation: 1261, user_id: 11970424, user_type: 'registered', profile_image: 'https://lh3.googleusercontent.com/a-/AAuE7mBtk1RWDn4pxOTevKb_hxr5mtlp5m2PqKKsfKWv=k-s128', …}
    // question_id: 69205631
    // score: 0
    // tags: (4) ['java', 'mysql', 'spring', 'spring-data-jpa']
    // title: "Spring JPA + MySQL Deadlock found on commit but the deadlock is not registered into the error_log of the database"

}

) {

    return (
        <QuestionStyles>
            <div className="question-section">


                <div className="ques">
                    <div className="info">
                        <div className="author">
                            {question.owner.display_name}
                        </div>
                        <div className="instant">
                            {
                                new Date(question.creation_date).toGMTString()
                            }
                        </div>

                    </div>
                    <div className="heading">
                        <a href={question.link} target="_blank" rel="noopener noreferrer" >

                            <div className="title">

                                {
                                    question.title
                                }
                            </div>
                        </a>
                        <div className="tag">
                            {question.tags[0]}
                        </div>
                    </div>
                </div >
            </div>
        </QuestionStyles >
    )
}
