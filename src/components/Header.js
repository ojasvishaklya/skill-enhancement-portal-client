import React from 'react';
import styled from 'styled-components';

const HStyle = styled.div`
  width: max-content;
  margin: 2rem 0;
  font-size: 3rem;
  line-height: 1.3em;
  color:var(--text);
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  hr{
    margin-top: 1rem;
    height: 2px;
  }
`;

export default function Header({ text }) {
  return (
    <HStyle className="para">
      <p>{text}</p>
      <hr/>
    </HStyle>
  );
}
