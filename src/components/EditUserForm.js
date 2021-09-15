import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";
import axio from '../app/AxiosConfig';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { login } from '../features/userSlice';



const EditFormStyle = styled.form`
   width: 100%;
   height: 100%;
   margin : auto;
   padding: 5% 12.5% 5% 12.5%;
   background-color: var(--background);
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



export default function EditUserForm({
    userProfile

}) {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState(userProfile.name);
    const [linkedin, setLinkedin] = useState(userProfile.linkedin);
    const [e_password, setE_password] = useState("");
    const [n_password, setN_password] = useState("");
    const [github, setGithub] = useState(userProfile.github);
    const history = useHistory();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

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
        const userReq = {
            "linkedin": linkedin,
            "github": github,
            "username": name,
            "e_password": e_password,
            "n_password": n_password,
            "email": userProfile.email
        }
        const res = await axio.put("/users/update/", userReq);
        user.username=name;
        dispatch(login(user));
        localStorage.setItem("user", JSON.stringify(user));

        history.push("/profile/" + userProfile.id)
        setLoading(false);

    };

    return (

        <EditFormStyle onSubmit={(e) => handleSubmit(e)}>
            <ToastContainer className="toast" />
            <div className="form-group">
                <label htmlFor="username">
                    Your Username
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
                <label htmlFor="github">
                    Github url
                    <input
                        type="url"
                        id="github"
                        name="github"
                        value={github}
                        onChange={(e) => { setGithub(e.target.value) }
                        }
                        placeholder="optional"
                    />
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="linkedin">
                    Linkedin url
                    <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        value={linkedin}
                        onChange={(e) => { setLinkedin(e.target.value) }}
                        placeholder="optional"
                    />
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="n-password">
                    New Password
                    <input
                        type="password"
                        id="n-password"
                        name="n-password"
                        value={n_password}
                        onChange={(e) => { setN_password(e.target.value) }}
                        placeholder="optional"
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="e-password">
                    Existing Password
                    <input
                        type="password"
                        id="e-password"
                        name="e-password"
                        value={e_password}
                        onChange={(e) => { setE_password(e.target.value) }}
                        placeholder="only required for password update"
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
                        Update Profile
                    </button>
            }



        </EditFormStyle>
    );
};