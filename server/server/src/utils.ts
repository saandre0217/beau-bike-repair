import * as bcrypt from 'bcrypt';
import { Admin } from './db/models/admin';

export const generateHash = (password: string) => {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt)
    return hash;
}

export const compareHash = (password: string, hashed: string) => {
    return bcrypt.compare(password, hashed)
}


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
createAdmin('beau1121', 'password')