import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyLoader from './MyLoader';
import axio from '../app/AxiosConfig';
import axios from 'axios';


const FormStyle = styled.form`
   width: 100%;

   .search-tray{
       margin:0 auto;
       font-size: 1.8rem;
        display: flex;
        justify-content: space-evenly;
        width: 50%;
        margin-bottom: 2rem; 
        background-color :var(--background-s) ;
        border-radius: 10px 10px 10px 10px;
        .search-type{
            padding: 1rem 2rem;
            text-align: center;
            width: 100%;
            border: 2px solid var(--background-s);
            cursor: pointer;
            &:hover{
                border: 2px solid ;
            }
        }     
   }

   .form-group {
        display: flex;
        justify-content: center;
        width: 100%;
   }

   input{
     margin:0;
     width: 50%;
     text-align: center;
     font-size: 2rem;
     padding: 1.2rem;
     color: var(--text);
     background-color: var(--background-s);
     outline: none;
     border: none;
     border-radius: 10px 0 0 10px;
     &:focus{
       border:1px solid var(--primary);
     }
     &:hover{
       border:1px solid var(--primary);
       button{
           border: 1px solid var(--primary);
       }
     }

   }

   
   button[type='submit'] {
     background-color: var(--primary);
     color: var(--text);
     font-size: 2rem;
     display: inline-block;
     outline: none;
     border: 2px solid var(--primary);
     padding: 1.2rem 4rem;
     border-radius: 0 10px 10px 0;
     cursor: pointer;
     height: max-content;
   }
   .toast{
     font-size:2rem;
     margin-top:5rem
   }
   @media only screen and (max-width: 768px) {
    .form-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 2rem;
        button{
            border-radius: 0px 0px 10px 10px;
            width: 80%;
            font-size:1.5rem;

        }
        input{
            border-radius: 10px 10px 0px 0px;
            width: 80%;
        }
   }
   }
 `;



export default function SearchBar({
    setUserList,
    setQuestionList,
    search,
    setSearch
}) {
    const [query, setQuery] = useState('');
    const [searchTray, setSearchTray] = useState(false);
    const [loading, setLoading] = useState(false);





    const handleSubmit = (e) => {
        console.log("here")
        e.preventDefault();
        setLoading(true);
 
        async function fetchData() {
            const dto = {
                "text": query
            };
            console.log(dto);

            if (search.current === "user") {
                const res = await axio.get(`/users/search/`+query);
                console.log(res.data);
                setUserList(res.data);
                setLoading(false);
            }
            else if (search.current === "question") {
                const res = await axio.post('/ques/search',dto);
                console.log(res.data);
                setQuestionList(res.data);
                setLoading(false);
            }

        }

        fetchData();
        setLoading(false);

    };

    return loading ?
        <MyLoader />
        : <FormStyle onSubmit={(e) => handleSubmit(e)}
            onMouseEnter={() => {
                setSearchTray(true);
            }}
            onMouseLeave={() => {
                setSearchTray(false);
            }}
        >
            <ToastContainer className="toast" />
            <div className="form-group"

            >
                <input
                    type="text"
                    id="query"
                    name="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={"Search a " + search.current}
                    required

                />
                <button
                    id="search"
                    type="submit"
                >
                    Send
                </button>
            </div>
            {
                searchTray &&
                <div className="search-tray">
                    <div className="search-type"

                        onClick={() => {
                            setSearch({
                                "question": false,
                                "tag": false,
                                "user": true,
                                "current": "user"
                            })
                        }}
                        style={{ border: search.user ? "2px solid" : "" }}
                    >
                        User
                    </div>

                    <div className="search-type"
                        onClick={() => {
                            setSearch({
                                "question": true,
                                "tag": false,
                                "user": false,
                                "current": "question"
                            })
                        }}
                        style={{ border: search.question ? "2px solid" : "" }}
                    >
                        Question
                    </div>


                    <div className="search-type"
                        onClick={() => {
                            setSearch({
                                "question": false,
                                "trending": true,
                                "user": false,
                                "current": "trending question"
                            })
                        }}
                        style={{ border: search.trending ? "2px solid" : "" }}
                    >
                        Trending
                    </div>
                </div>
            }


        </FormStyle>
        ;
};