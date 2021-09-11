import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";
import axio from '../app/AxiosConfig';
import { useHistory } from "react-router-dom";





const RegisterFormStyle = styled.form`
   width: 50%;
   margin :0 auto;

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



export default function RegisterForm() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [github, setGithub] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        console.log("here")
        e.preventDefault();
        setLoading(true);
        toast.dark(`Trying to sign in`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const userReq = {
            "email": email,
            "password": password,
            "linkedin":linkedin,
            "github":github,
            "username":username
        }
        axio.post("/auth/signup", userReq)
            .then(function (response) {
                console.log(response);
                toast.dark(response.data, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setLoading(false);
                history.push("/login");
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

        <RegisterFormStyle onSubmit={(e) => handleSubmit(e)}>
            <ToastContainer className="toast" />
            <div className="form-group">
                <label htmlFor="username">
                    Your Username
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="email">
                    Your Email
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="password">
                    Set New Password
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="github">
                    Github url
                    <input
                        type="link"
                        id="github"
                        name="github"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                        placeholder="optional"
                    />
                </label>
            </div>
            
            <div className="form-group">
                <label htmlFor="linkedin">
                    Linkedin url
                    <input
                        type="link"
                        id="linkedin"
                        name="linkedin"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        placeholder="optional"
                    />
                </label>
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
                        Sign Up
                    </button>
            }



        </RegisterFormStyle>
    );
};