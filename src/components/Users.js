import React from 'react'
import styled from 'styled-components'
import UserMin from './UserMin';


const UsersStyles = styled.div`
    max-height: 700px;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export default function Users({
    list=[]
    // private Long id;
    // private String name;
    // private String email;
    // private String points;
}) {
    return (
        <UsersStyles >
                {
                    list.map((ele)=>{
                       return <UserMin 
                            userId={ele.id}
                            username={ele.name}
                            email={ele.email}
                            points={ele.points}/>                             
                    })
                }
        </UsersStyles>
    )
}

