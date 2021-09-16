import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";
import axio from '../app/AxiosConfig';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice'





const LoginStyle = styled.form`
   width: 50%;
   margin :0 auto;
   padding-top: 5rem;

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

    @media only screen and  (max-width: 768px){
        margin-top: 5rem;
        width: 80%;
    }
 `;



export default function LoginForm() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    const dispatch = useDispatch();


    const handleSubmit = async (e) => {


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
            "password": password

        }
        try {
            const res = await axio.post("/auth/signin", userReq);
            console.log(res);
            if (res.status === 200) {
                toast.dark(`Successfully signed in for ` + res.data.username, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setLoading(false);

                dispatch(login(res.data));
                localStorage.setItem("user", JSON.stringify(res.data));
                history.push(`/profile/${res.data.id}`);
            }
        } catch (e) {
            setLoading(false);
            toast.error("Invalid username or password", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;


        }





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