import { Admin } from './models/admin';
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
createAdmin('beau', '123')