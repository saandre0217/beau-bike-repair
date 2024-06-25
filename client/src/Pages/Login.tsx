import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import useLocalStorage  from 'use-local-storage';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AdminAttributes } from '../../../server/models/admin'

export const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('')
    const [user, setUser] = useState<AdminAttributes | null>(null)

    const navigate = useNavigate()
    const setUserContext = (userData: AdminAttributes) => {
        setUser(userData)
        const user = JSON.stringify(userData)

        sessionStorage.setItem('user', user)
    }
    const submitLogin = async () => {
        try{
           const checkLogin = await axios.post('/auth/login', {
                username,
                password
            })

            if(checkLogin.status === 200){
                console.log('found', checkLogin)
                setUserContext(checkLogin.data.user)
                localStorage.setItem('isAuthenticated', JSON.stringify(true))
                navigate('/admin')
            }
        

        }catch(error){
            localStorage.setItem('isAuthenticated', JSON.stringify(false))
            alert('invalid credentials')
            console.error('could not log in', error)
        }

    }
    useEffect(() => {
        localStorage.setItem('isAuthenticated', JSON.stringify(false))
    }, [user])
    return(
        <div>
             <div>username:</div>
            <input 
                id='username'
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            <div>password:</div>
            <input 
                id='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <button onClick={() => submitLogin()}>log in</button>
        </div>
    )
}