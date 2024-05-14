import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CustomerInstance } from '../../../server/models/customer';
import { CustomerView } from '../Components/Admin/customerView';

export const Admin = () => {
    const [customers, setCustomers] = useState<CustomerInstance[]>();

    const getAllCustomers = async() => {
        try{
            const customerArray = await axios.get('http://localhost:3001/api/customer/all')
            console.log(customerArray.data)
            setCustomers(customerArray.data)

        }catch(error){
            console.error('could not get all customers', error)
        }
    }

    useEffect(() => {
        getAllCustomers()
    },[])
    return (
        <div style={{color:'black'}}>
            {customers ? customers.map((customer, ind) => (
                <CustomerView 
                    key={ind}
                    customerData={customer}
                />
            )) 
            : <div></div>}
        </div>
    )
}