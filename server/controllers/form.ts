
import * as jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config';
import { Request, Response } from "express";
import { Customer, CustomerInstance } from '../models/customer'
import { WorkOrder, WorkOrderAttributes } from '../models/workOrder';
import { Bike } from '../models/bike';
import { PhotoWorkOrder } from '../models/photo';
import { allQuestionsInstance } from '../../client/src/Components/Form/formQuestionData'

export const createCustomer = async(formData: allQuestionsInstance) => {
    const { firstName, lastName, email, phone} = formData
    try {
        // console.log(firstName, lastName, phone, email)
        const currentCustomer = await Customer.findOne({
            where: {
                phone
            }
        })

        if(currentCustomer){
            return currentCustomer
        } else {
            const newCustomer = await Customer.create({
                firstName,
                lastName,
                phone,
                email 
            })
    
            return newCustomer
        }

        
    }catch(error){
        console.error('error creating customer', error)
    }
};
interface createWorkOrderAttributes {
    createWorkOrder: (formData: allQuestionsInstance, customerId: number) => WorkOrderAttributes
}
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
    tubeless,
    comments,
    other } = formData
    try {

        const workOrder = await WorkOrder.create({
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
            comments, 
            other,
            customerId
        })

        return workOrder

    }catch(error){
        console.error('could not create workorder', error)
    }
}

export const createBike = async(formData: allQuestionsInstance, workOrderId:number, customerId:number) => {
    const {make, model, bikeYear} = formData;

    try{
        const bike = await Bike.create({
            make,
            model,
            bikeYear,
            customerId,
            workOrderId
        })
        return bike
    }catch(error){
        console.error('could not create bike', error)
    }
}

export const createCustomerOrder = async(req:Request, res: Response) => {
    const formData = req.body

    try{
        const customer:CustomerInstance | undefined = await createCustomer(formData)
        if(customer){
            const workOrder: any = await createWorkOrder(formData, customer.id)

            if(workOrder){
                const bike = await createBike(formData, workOrder.id, customer.id)
                res.status(400).send(bike)
            }
        } 
    } catch(error){
        console.error('error creating full order', error)
    }
}
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