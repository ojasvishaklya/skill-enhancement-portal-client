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

export default function Feed() {

  const [list, setList] = useState([]);

  const user = useSelector(selectUser);
  const history = useHistory();

  const [modal, setModal] = useState(false);

  useEffect(() => {

    if (!user) {
      history.push("/login");
      return;
    }
    async function fetchData() {

      const res = await axio.get(`/ques/feed/` + user.id);
      setList(res.data);
      console.log(res.data);
    }

    fetchData();
  }, [])

  return (
    <ExploreStyles>
      <div className="container">
        {
          <>
            <Header text={user ? user.username + "'s feed": "Please Login"} />
            {list.length ? <Questions list={list} />
              : <div />}
          </>
        }
        <div className="fab" onClick={() => {
          if (!user) {
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
