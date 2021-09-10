import React from 'react'
import styled from 'styled-components'


const NotificationStyles=styled.div`

    background-color: var(--background-s);
    font-size: 1.8rem;
    padding: 1rem 2rem;
    border-radius:2px;
    margin:1rem 0;
`;

function Notification(
    {
        text="Notification text"
    }
) {
    return (
        <NotificationStyles>
            {text}
        </NotificationStyles>
    )
}


export default Notification
