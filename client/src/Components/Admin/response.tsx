import React, { useEffect, useState } from 'react';
import { ResponseProps } from '../../../../server/server/src/db/models/workOrder';
import { ResponseField } from './responseField';
//import { checkBoxLabels } from '../Form/formQuestionData';
export const Response = (responseObj:ResponseProps ) => {
    const [customer, setCustomer] = useState({})
    const [bike, setBike] = useState({})
    const [order, setOrder] = useState({})
  const check = (obj:any) => {
    Object.keys(obj).map((key, i) => {
        console.log(`${key}: ${obj[key]}`)
    })
  }

  const setStateObjects = (obj: ResponseProps) => {
    const workOrder = {};
  
    for(let key in obj.response){
        //@ts-ignore
        if(key !== 'customer' && key !== 'bike' && obj.response[key]){
            //@ts-ignore
            workOrder[key] = obj.response[key]
        }
    }
    setOrder(workOrder)
    setCustomer(obj.response.customer)
    setBike(obj.response.bike)

    console.log('order', order)
  }

  useEffect(()=> {
    setStateObjects(responseObj)
  },[])
    return (
        <div >
            <div style={{border:'2px red solid'}}>
                {Object.keys(customer).map((key, i)=> (
                   <ResponseField 
                   key={`customer${i}`}
                       label={key}
                       //@ts-ignore
                       customerResponse={customer[key]}
                   />
               ))}
            {Object.keys(bike).map((key, i)=> (
                <ResponseField 
                key={`bike${i}`}
                    label={key}
                    //@ts-ignore
                    customerResponse={bike[key]}
                />
            ))}
             {Object.keys(order).map((key, i)=> (
                <ResponseField 
                key={`order${i}`}
                    label={key}
                    //@ts-ignore
                    customerResponse={order[key].toString()}
                />
            ))}
            </div>
            
        </div>
    )
}

//loop through response object and also match with form question data 
//object to pass in response and label to response field component