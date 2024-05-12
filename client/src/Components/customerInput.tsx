import React, { useState } from 'react';
import axios from 'axios';

export const CustomerInput = () => {
const [firstName, setFirstName] = useState<string>('');
const [lastName, setLastName] = useState<string>('');
const [phone, setPhone] = useState<string>('');
const [email, setEmail] =useState<string>('');
//console.log(firstName, lastName, phone, email)
const submitForm = async () => {
    try{
        await axios.post('http://localhost:3001/customer/create', 
        {
            firstName,
            lastName,
            phone,
            email
        })

        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('')

    }catch(error){
        console.error('could not post form', error)
    }

}

    return (
        <div >
            <div>First Name:</div>
            <input 
                id='firstName'
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
            <div>Last Name:</div>
            <input 
                id='lastName' 
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <div>Phone Number:</div>
            <input 
                id='phone' 
                type='text'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <div>Email Address:</div>
            <input 
                id='email' 
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button
            onClick={() => submitForm()}
            >Submit</button>
        </div>
    )
}