import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const ToastStyles= styled.div`

`;

function Snack({
    message = "message",
    error = false
}) {
    return (
        <ToastStyles>
        </ToastStyles>
    )
}

export default Snack
