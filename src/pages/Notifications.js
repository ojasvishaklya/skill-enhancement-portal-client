import Header from '../components/Header'
import Notification from '../components/Notification'

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import axio from '../app/AxiosConfig';
import MyLoader from '../components/MyLoader';
import Modal from 'react-awesome-modal';
import { useParams } from 'react-router';



function Notifications() {

    const [notList, setNotList] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = useSelector(selectUser);
    const history=useHistory();

    useEffect(() => {

        if(!user){
            history.push("/login");
            return;
        }
        async function fetchData() {
            const id = user.id;
            const res = await axio.get(`/notification/${id}/`);
            setNotList(res.data);
            console.log(res.data);
            setLoading(false);
        }

        fetchData();

        return () => {
        }
    }, [])



    return (
        <div className="container">
            {
                loading ?
                    <MyLoader text="Fetching Notifications" />
                    : <> < Header text="Latest Notifications" />
                        {
                            notList.map((ele) => {
                                return <Notification
                                    text={ele.text}
                                    id={ele.id}
                                    instant={ele.instant}
                                />
                            })
                        }
                    </>
            }
        </div >
    )
}

export default Notifications
