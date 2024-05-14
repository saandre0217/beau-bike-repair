import React, { useState } from 'react';
import { CustomerInstance } from '../../../../server/models/customer'

interface CustomerProps {
    customerData: CustomerInstance
}
export const CustomerView = (customerDataObj: CustomerProps) => {
    const customer = customerDataObj.customerData

    return (
        <div>
            <div>first name: {customer.firstName}</div>
            <div>last name: {customer.lastName}</div>
            <div>phone number:{customer.phone}</div>
            <div>email address: {customer.email}</div>
        </div>
    )
}