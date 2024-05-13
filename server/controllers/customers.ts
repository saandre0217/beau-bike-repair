import { Request, Response } from "express";
import { Customer } from '../models/customer';

export const createCustomer = async(req: Request, res: Response) => {
    const { firstName, lastName, phone, email } = req.body 
    try {
        // console.log(firstName, lastName, phone, email)
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

export const getCustomers = async(req:Request, res: Response) => {
    try{
        const customers = await Customer.findAll();
        res.status(200).send(customers)
    } catch(error){
        console.error('could not get all customers:', error);
        res.sendStatus(500)
    }
};