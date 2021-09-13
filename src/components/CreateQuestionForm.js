import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";
import axio from '../app/AxiosConfig';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const EditFormStyle = styled.form`
   width: 100%;
   height: 100%;
   margin : auto;
   padding: 5% 12.5% 5% 12.5%;
   background-color: var(--background);
   textarea {
     min-height: 250px;
     resize: vertical;
   }
   button[type='submit'] {
     margin-top:2rem;
     width: 100%;
     background-color: var(--background);
     color: var(--text);
     font-size: 2rem;
     display: inline-block;
     outline: none;
     border: 2px solid var(--primary);
     padding: 1rem 4rem;
     border-radius: 8px;
     cursor: pointer;

     &:hover{
        background-color: var(--primary);
     }
    }
 `;



export default function CreateQuestionForm({

}) {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const history=useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        toast.dark(`Updating user information`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const quesReq = {
            "postName": name,
            "url": url,
            "description": description,
            "tag": {
                "name": tag
            },

        }
        const res = await axio.post("/ques/", quesReq);

        console.log(res.data);
        history.push("/question/"+res.data.id)
        setLoading(false);



    };

    return (

        <EditFormStyle onSubmit={(e) => handleSubmit(e)}>
            <ToastContainer className="toast" />
            <div className="form-group">
                <label htmlFor="username">
                    Question Title
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        required
                    />
                </label>
            </div>
            <div className="form-group">

                <textarea
                    placeholder="Question Description"
                    type="text"
                    id="text"
                    name="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="url">
                    Refrence URL
                    <input
                        type="url"
                        id="url"
                        name="url"
                        value={url}
                        onChange={(e) => { setUrl(e.target.value) }
                        }
                        placeholder="optional"
                    />
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="linkedin">
                    Tag
                    <input
                        type="text"
                        id="tag"
                        name="tag"
                        value={tag}
                        onChange={(e) => { setTag(e.target.value) }}
                        placeholder="optional"
                    />
                </label>
            </div>



            {
                loading ?
                    <Loader
                        type="Grid"
                        color="var(--primary)"
                        height="5"
                    /> :
                    <button
                        type="submit"
                    >
                        Post Question
                    </button>
            }



        </EditFormStyle>
    );
};