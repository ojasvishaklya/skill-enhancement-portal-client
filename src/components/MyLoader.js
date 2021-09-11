import React from 'react'
import Loader from 'react-loader-spinner';
import styled from 'styled-components';



const MyLoaderStyles = styled.div`

    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        text-align: center;
        #loading-text{
            font-size: 2rem;
            margin: 2rem 0;
        }
        svg{
            height: 60px;
        }
    }


`;
function MyLoader({
    text = "Add text here",
}) {
    return (
        <MyLoaderStyles>
            <div>
                <div id="loading-text">{text}</div>
                <Loader
                    type="Grid"
                    color="var(--primary)"
                    height="10"
                />
            </div>

        </MyLoaderStyles>
    )
}

export default MyLoader
