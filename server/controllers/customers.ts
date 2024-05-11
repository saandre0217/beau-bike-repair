import { Request, Response } from "express";
import { Customer } from '../models/customer';

export const createCustomer = async(req: Request, res: Response) => {
    const { firstName, lastName, phone, email } = req.body 
    try {
        console.log(firstName, lastName, phone, email)
        const customer = await Customer.create({
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email
        })

        res.status(200).send(customer)
    }catch(error){
        console.error('error creating customer', error)
        res.sendStatus(500)
    }
};