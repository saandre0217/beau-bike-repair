import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CustomerResponse } from '../../../server/models/workOrder'
import { Response } from '../Components/Admin/response'
const serverPath = process.env.REACT_APP_SERVER_PATH
export const Admin = () => {
    const [customers, setCustomers] = useState<CustomerResponse[]>();

    const getAllCustomers = async(status: string) => {
        try{
            const customerArray = await axios.get(`${serverPath}/api/customer/${status}`)
            console.log(customerArray.data)
            setCustomers(customerArray.data)

        }catch(error){
            console.error('could not get all customers', error)
        }
    }
    console.log(customers)

    useEffect(() => {
        getAllCustomers('new')
    },[])
    return (
        <div style={{color:'black'}}>
            {customers ? customers.map((customer, ind) => (
                <Response 
                response={customer}
                />
            )) 
            : <div></div>}
        </div>
    )
}