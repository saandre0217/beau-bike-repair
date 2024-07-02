import { Router } from "express";
import { Admin } from '../../db/models/admin'
import { compareHash } from "../../utils"
const router = Router();

router.post('/', async(req, res) => {
    const { username, password } = req.body
    try{
        const admin = await Admin.findOne({
            where:{username}
        })
        //@ts-ignore
        if(admin && await compareHash(password, admin.password)) {
            // const token = jwt.sign(
            //     {
            //         userid: admin.id, 
            //         username: admin.username, 
            //         role:'mechanic'
            //     },
            //     JWT_SECRET, 
            //     { expiresIn: '15d'}
            // )
            console.log('admin found', admin)
            res.status(200).send(admin)
        } 


    } catch(error){
        console.error('login error', error)
        res.sendStatus(500);
    }
} )
export default router;