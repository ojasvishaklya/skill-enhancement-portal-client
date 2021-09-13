import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";
import axios from 'axios';

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import axio from '../app/AxiosConfig';


const MakeCommentStyles = styled.form`
width: 100%;
margin :2rem auto;

textarea {
     min-height: 250px;
     resize: vertical;
     border: 2px solid ;
   }



    .lower-row{
        display: flex;
        gap: 5rem;
        align-items: center;
        button[type='submit'] {
            height: max-content;
            width: max-content;
            background-color: var(--background);
            color: var(--text);
            font-size: 1.5rem;
            outline: none;
            border: 2px solid var(--primary);
            padding: 1rem 4rem;
            border-radius: 8px;
            cursor: pointer;

            &:hover{
                background-color: var(--primary);
            }
        }
        input{
            border :2px solid;
        }
    }
    @media only screen and (max-width: 768px) {
      .lower-row{
          flex-direction: column;
          gap: 0;
      }
      button[type='submit'] {
          width: 100%;
      }
  }
`;

function MakeComment({
    q_id
}) {
    const history=useHistory();
    const user = useSelector(selectUser);
    const [url, setUrl] = useState('');
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        console.log("here")
        e.preventDefault();
        if (!user) {
            history.push("/login");
            return;
        }
        setLoading(true);


        const commentRequest = {
            "q_id": q_id,
            "text": text,
            "url": url
        }
        axio.post("/comment", commentRequest)
            .then(function (response) {
                console.log(response);
                history.push("/question/"+q_id);
                setText("");
                setUrl("");
                setLoading(false);


            }, function (error) {
                toast.error(error.text, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });


    };

    return (

        <MakeCommentStyles onSubmit={(e) => handleSubmit(e)}>
            <ToastContainer className="toast" />
            <div className="form-group">

                <textarea
                    placeholder="Type your comment"
                    type="text"
                    id="text"
                    name="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                />
            </div>
            <div className="lower-row">
                <div className="form-group">

                    <input
                        type="text"
                        id="url"
                        name="url"
                        value={url}
                        placeholder="Link to other question"
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>

                {
                    loading ?
                        <Loader
                            type="Grid"
                            color="var(--primary)"
                            height="10"
                        /> :
                        <button
                            type="submit"
                        >
                            Post Comment
                        </button>
                }
            </div>
        </MakeCommentStyles>
    );
}

export default MakeComment

