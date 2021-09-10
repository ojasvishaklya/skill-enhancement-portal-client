import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Button from '../components/Button';
import Questions from '../components/Questions';
import Comments from '../components/Comments';


const ProfileStyles = styled.div`

  .profile{
    width:100%;
    font-size: 2rem;

    display: flex;
    gap: 5rem;
    .left{
      padding: 1rem 2rem;
      width: 30%;
      min-height: 70vh;
      background-color: var(--background);
      overflow: visible;
      max-height: max-content;
      .button-tray{
        display: flex;
        justify-content: space-evenly;
      }
      .user-info{
        margin:1rem 0;
        span{
          color: gold;
        }
      }
      .user-click{
        margin-top:3rem;
        background-color: var(--background-s);
        padding: 2rem 2rem;
        border-radius: 5px;
        span{
          color: gold;
        }
        cursor: pointer;
        text-align: center;
        * {
          pointer-events: none;
        }
        border:2px solid var(--background);
        &:hover{
          border:2px solid var(--primary);
        }
      }
    }
    .right{
      width: 70%;
      padding: 1rem 2rem;
      background-color: var(--background-s);
      display: flex;
      flex-direction: column;
      justify-content: start;
      overflow: show;
      .upper{
        
      }
      .lower{
      }
    }
  }


  @media only screen and (max-width: 768px) {
    .profile{
      flex-direction: column;
      .left{
        width: 100%;
      }
      .right{
        width: 100%;
      }
      font-size: 1.5rem;
    }
  }
`;

export default function Profile() {

  const [info, setInfo] = useState({
    "ques": true,
    "comments": false,
    "followers": false,
    "following": false,
    "current": "Question"
  });
  return (
    <ProfileStyles>
      <div className="container">
        <div className="profile">
          <div className="left">
            <Header text="Ojasvi Shaklya" />
            <div className="button-tray">
              <Button btnText="Follow" color="#1E90FF"/>
              <Button btnText="Spam" color="red"/>
            </div>
            <div className="user-info">
              ojasvi shaklya@gmail.com
            </div>
            <div className="user-info">
              Linkedin
            </div>
            <div className="user-info">
              Github
            </div>
            <div className="user-info">
              Points: <span>100</span>
            </div>
            <div className="user-click" onClick={
              () => {
                setInfo({
                  "ques": true,
                  "comments": false,
                  "followers": false,
                  "following": false,
                  "current": "Question"
                })
              }
            } style={{
              border: info.ques ? '2px solid var(--primary)' : ''
            }}>
              Questions: 8
            </div>
            <div className="user-click" onClick={
              () => {
                setInfo({
                  "ques": false,
                  "comments": true,
                  "followers": false,
                  "following": false,
                  "current": "Comments"
                })
              }
            } style={{
              border: info.comments ? '2px solid var(--primary)' : ''
            }}
            >
              Comments: 12
            </div>
            <div className="user-click" onClick={
              () => {
                setInfo({
                  "ques": false,
                  "comments": false,
                  "followers": true,
                  "following": false,
                  "current": "Followers"
                })
              }
            } style={{
              border: info.followers ? '2px solid var(--primary)' : ''
            }}>
              Followers: 101
            </div>
            <div className="user-click" onClick={
              () => {
                setInfo({
                  "ques": false,
                  "comments": false,
                  "followers": false,
                  "following": true,
                  "current": "Following"
                })
              }
            } style={{
              border: info.following ? '2px solid var(--primary)' : ''
            }}>
              Following: 51
            </div>
          </div>
          <div className="right">
            <Header text={info.current} />
           { info.ques && <Questions/>}
           { info.comments && <Comments/>}

          </div>
        </div>
      </div>
    </ProfileStyles>
  );
}
