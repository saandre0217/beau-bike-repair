import { Request, Response } from "express";
import { Admin } from '../models/admin';

export const createAdmin = async(req:Request, res:Response) =>{
    const { username, password } = req.body
try{

    const admin = await Admin.create({
        username,
        password
    })

    res.sendStatus(200)
}catch(error){
    console.error('could not create admin', error)
    res.sendStatus(500)
}
}