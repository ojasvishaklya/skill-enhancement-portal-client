import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  
    font-size: 2rem;
    border: ${(props) =>
    props.outline ? '2px solid var(--primary)' : ''};
    padding: 1rem 3rem;
    border-radius: 5px;
    display: inline-block;
    color: var(--text);
    &:hover{
        background-color: var(--primary);
    }
    cursor: pointer;
    * {
          pointer-events: none;
    }
  
  @media only screen and (max-width: 768px) {
      font-size: 1.8rem;
  }
`;

export default function Button({
  btnText = 'btnText',
  outline = true,
  color='var(--primary)'
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper" style={{backgroundColor: outline ? '':color}}>
        {btnText}
    </ButtonStyle>
  );
}
