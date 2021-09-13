import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router';


const UserStyles = styled.div`

    font-size: 1.8rem;
    margin :1rem;
    background-color: var(--primary);
    width:max-content;
    padding: 1rem 2rem;
    border-radius: 5px;
    &:hover{
        border: 2px solid;
    }
    cursor: pointer;
    * {
        pointer-events: none;
    }
    
    .top{
        display: flex;
        font-size: 2rem;
        gap: 5rem;
        .name{
            padding: 0.2rem 0.5rem;
            border-radius: 5px;
        }
        .points{
            color:gold
        }
    }

`;
function UserMin({
    username = "Ojasvi Shaklya",
    userId = "1",
    points = "160",
    email = "ojasvishaklya@gmail.com",
}) {
    const history =useHistory();
    return (
        <UserStyles onClick={()=>{
            history.push(`/profile/${userId}`)
        }}>

            <div className="top">
                <div className="name">
                    {username}
                </div>

                <div className="points">
                    {points +" ✭"}
                </div>
            </div>
            {email}
        </UserStyles>
    )
}

export default UserMin
