import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";
import axios from 'axios';



const LoginStyle = styled.form`
   width: 50%;
   margin :0 auto;
 `;



export default function LoginForm() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        console.log("here")
        e.preventDefault();
        setLoading(true);
        toast.dark(`forwarding your message ${email}`, {
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
            "password": password

        }
        axios.post("http://localhost:8080/auth/signin", userReq)
            .then(function (response) {
                console.log(response);
                toast.dark(`message sent !!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

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

        setLoading(false);

    };

    return (

        <LoginStyle onSubmit={(e) => handleSubmit(e)}>
            <ToastContainer className="toast" />
            <div className="form-group">
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
                <label htmlFor="password">
                    Your Password
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
                        Sign In
                    </button>
            }



        </LoginStyle>
    );
};