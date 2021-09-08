import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormStyle = styled.form`
   width: 100%;

   .form-group {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 2rem;
   }

   input{
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
     border: none;
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



export default function SearchBar() {
    const [query, setQuery] = useState('');


    const handleSubmit = (e) => {
        console.log("here")
        e.preventDefault();
        var templateParams = {
            query: query,

        };
        toast.dark(`forwarding your message ${query}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        // emailjs.send('service_p2apwk4', 'template_xnw7r6p', templateParams)
        //   .then(function (response) {
        //     toast.dark(`message sent !!`, {
        //       position: "top-right",
        //       autoClose: 5000,
        //       hideProgressBar: false,
        //       closeOnClick: true,
        //       pauseOnHover: true,
        //       draggable: true,
        //       progress: undefined,
        //     });
        //     setName("");
        //     setMessage("");
        //     setEmail("");
        //   }, function (error) {
        //     toast.error(error.text, {
        //       position: "top-right",
        //       autoClose: 5000,
        //       hideProgressBar: false,
        //       closeOnClick: true,
        //       pauseOnHover: true,
        //       draggable: true,
        //       progress: undefined,
        //     });
        //   });

    };

    return (

        <FormStyle onSubmit={(e) => handleSubmit(e)}>
            <ToastContainer className="toast" />
            <div className="form-group">
                <input
                    type="text"
                    id="query"
                    name="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search a question"
                    required
                />
                            <button
                type="submit"
            >
                Send
            </button>
            </div>



        </FormStyle>
    );
};