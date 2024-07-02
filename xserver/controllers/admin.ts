import { Request, Response } from "express";
import { Admin } from '../models/admin';
import bcrypt from 'bcrypt';

export const createAdmin = async(username:string, password:string) =>{
try{
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {

        if(salt){
            bcrypt.hash(password, salt, (err, hash) => {
                if(hash){      
                    Admin.create({
                        username,
                        password: hash
                    })
                } else {
                    console.error('hash error', err)
                }
            })
        } else {
            console.error('salt error', err)
        }
        
    })
   

    console.log('admin created')
}catch(error){
    console.error('could not create admin', error)
}
}

export const authenticateAdmin = async(req:Request, res:Response, cb:any) => {
    const { username, password } = req.params;

    try{
       const admin = await Admin.findOne({
            where: {username}
        })
        console.log(admin)
        res.send(admin)
        if (!admin){
            return cb(null, false, {message: 'incorrect username or password'})
        } else {
          const match = await bcrypt.compare(password, admin.dataValues.password ) 

          if(match){
            console.log('matched')
          }
        }
    }catch(error){
        console.error('could not get admin', error)
    }
    
    
}