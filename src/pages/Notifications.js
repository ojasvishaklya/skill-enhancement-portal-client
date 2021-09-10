import React from 'react'
import Header from '../components/Header'
import Notification from '../components/Notification'


function Notifications() {
    return (
        <div className="container">
            <Header text="Latest Notifications"/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
        </div>
    )
}

export default Notifications
