import React from 'react'
import styled from 'styled-components'


const NotificationStyles=styled.div`

    background-color: var(--background-s);
    font-size: 2rem;
    padding: 1rem 2rem;
    border-radius:2px;
    margin:1rem 0;
    .instant{
        text-align: end;
        font-size: 1.5rem;
        margin: 1rem 0;
    }
`;

function Notification(
    {
        id="1",
        text="Notification text",
        instant
    }
) {
    return (
        <NotificationStyles>
            <div className="instant">{new Date(instant).toGMTString()}</div>
            <div>{text}</div>
        </NotificationStyles>
    )
}


export default Notification
