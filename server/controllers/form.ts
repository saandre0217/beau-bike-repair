
import * as jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config';
import { Request, Response } from "express";
import { Customer } from '../models/customer'
import { WorkOrder, WorkOrderInstance } from '../models/workOrder';
import { Bike } from '../models/bike';
import { PhotoWorkOrder } from '../models/photo';
import { allQuestionsInstance } from '../../client/src/Components/Form/formQuestionData'

export const createCustomer = async(formData: allQuestionsInstance) => {
    const { firstName, lastName, email, phone} = formData
    try {
        // console.log(firstName, lastName, phone, email)
        const customer = await Customer.create({
            firstName,
            lastName,
            phone,
            email 
        })

        return customer.id
    }catch(error){
        console.error('error creating customer', error)
    }
};

export const createWorkOrder = async(formData: allQuestionsInstance, customerId:number) => {
   const {tuneUp,
    frontBreak,
    rearBreak,
    frontShift,
    rearShift,
    chain,
    bartape,
    headset,
    bottomBracket,
    wheelBarring,
    flat,
    replaceTire,
    tubeless } = formData
    try {
//@ts-ignore
        const workOrder:WorkOrderInstance = await WorkOrder.create({
            progress:'new',
            tuneUp,
            frontBreak,
            rearBreak,
            frontShift,
            rearShift,
            chain,
            bartape,
            headset,
            bottomBracket,
            wheelBarring,
            flat,
            replaceTire,
            tubeless,
            customerId
        })

        return workOrder.id

    }catch(error){
        console.error('could not create workorder', error)
    }
}

const createBike = async(formData: )

export const getCustomers = async(req:Request, res: Response) => {
    try{
        // const bearerToken = req.headers.authorization?.split(' ');
        // const token = bearerToken && bearerToken[0] === 'Bearer' ? bearerToken[1] : null;

        // if(!bearerToken && !token ){
        //    //res.redirect('http:/localhost:3000/login')
        //    res.sendStatus(401)
        //    return;
        // } 

        // const payload = jwt.verify(token, JWT_SECRET )

        // if(payload){
            
        // }
        const customers = await Customer.findAll();
            res.status(200).send(customers)
    } catch(error){
        console.error('could not get all customers:', error);
        res.sendStatus(500)
    }
};