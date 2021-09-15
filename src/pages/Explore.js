import React from 'react';
import SearchBar from '../components/SearchBar';
import Questions from '../components/Questions';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Users from '../components/Users';
import axio from '../app/AxiosConfig';
import Button from '../components/Button';
import styled from 'styled-components';
import Modal from 'react-awesome-modal';
import CreateQuestionForm from '../components/CreateQuestionForm';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const ExploreStyles = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    .container{
      .fab{
        position: absolute;
        top: 70vh;
        right: 20%;
      }
    }
@media only screen and (max-width: 768px){
  .container{
      .fab{
        position: absolute;
        top: 80vh;
        right: 0;
      }
    }

}
`;

export default function Explore() {

  const [list, setList] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  const [stack, setStack] = useState([]);
  const [userList, setUserList] = useState([]);
  const user = useSelector(selectUser);
  const history=useHistory();
  const [search, setSearch] = useState({
    "user": false,
    "question": false,
    "trending": true,
    "current": "Trending Question"
  });
  const [modal, setModal] = useState(false);

  useEffect(() => {


    async function fetchData() {

      const res = await axio.get(`/ques/trending`);
      setList(res.data);
      console.log(res.data);
    }

    fetchData();
  }, [])

  return (
    <ExploreStyles>
      <div className="container">
        <SearchBar
          setUserList={setUserList}
          setQuestionList={setQuestionList}
          setStack={setStack}
          search={search} setSearch={setSearch} />
        {
          search.trending &&
          <>
            <Header text="Trending Questions" />
            {
              list.length ? <Questions list={list} />
                : <div />
            }
          </>
        }
        {
          search.question &&
          <>
            <Header text="Search Results" />
            {questionList.length ? <Questions list={questionList} />
              : <div />}
          </>
        }
                {
          search.question && stack.length &&
          <>
            <Header text="Stack Overflow Results" />
            {questionList.length ? <Questions list={questionList} />
              : <div />}
          </>
        }
        {
          search.user &&
          <>
            <Header text="Search Results" />
            {userList.length ? <Users list={userList} />
              : <div />}
          </>
        }
        <div className="fab" onClick={() => {
          if(!user){
            history.push("/login");
            return;
          }
          setModal(true)
        }}>
          <Button btnText="Create question +" outline={false} />
        </div>
      </div>
      <Modal width={"700px"} visible={modal} className="modal" onClickAway={() => setModal(false)}>
        <CreateQuestionForm />
      </Modal>

    </ExploreStyles>
  );
}
