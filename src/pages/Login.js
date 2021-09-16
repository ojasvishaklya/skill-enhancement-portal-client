import React from 'react'
import BParticles from '../components/BParticles'
import LoginForm from '../components/LoginForm'

function Login() {
    return (
        <div>
            <BParticles/>
            <div className="container">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login
