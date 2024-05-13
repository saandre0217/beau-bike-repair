// Import dependencies
import dotenv from 'dotenv';
import { connection, syncDatabase, createDatabase } from './config/db';
import express, { Request, Response, NextFunction } from 'express'
// import customerRoutes from './routes/api/customers'
// import adminRoutes from './routes/admin'
import routes from './routes'
import path from 'path'
import cors from 'cors'
import * as passportStrategy from "passport-local";
import passport from 'passport'
import { Admin, AdminAttributes } from './models/admin';
import bcrypt from 'bcrypt';

const clientPath = path.resolve(__dirname, '../client/dist')
export const app = express();

dotenv.config();

app.use(express.json())
app.use(express.static(clientPath))
const corsOption = {
  origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));

//route definition
// const routeHandler = express.Router()
// app.use('/', routeHandler)
// routeHandler.use('/customer', customerRoutes)
// routeHandler.use('/admin', adminRoutes)
app.use(routes)

//admin authentication

passport.use(new passportStrategy.Strategy(async(username, password, callback) => {
  try{
    if(!username){
      callback(null, false)
      const admin = await Admin.findOne({
        where:{username}
      })

      if(admin?.username === username && await bcrypt.compare(password, (admin.password).toString())) {
        callback(null, admin)
      } else {
        callback(null, false)
      }

    
    }
  }catch(error){
    console.error('auth error', error)
    callback(error)
  }
}))
passport.serializeUser((_req: Request, user:any, done:any) => {
  done(null, user);
});
passport.deserializeUser((user:any, done) => {
  const u = Admin.findOne(user.username);
  done(null, u);
});
export function isAuthenticated(req: Request ,res: Response, next: NextFunction): Response | void {
  if(req.user)
     return next();
  else
      res.redirect("http://localhost:3000/login"); 
}


//database connection
// createDatabase();
connection();
syncDatabase()

app.post('/api/login', passport.authenticate('local'), async (req: Request, res: Response) => {
  res.json("You loggedin!!!");
});


app.get('/api/user', isAuthenticated, async (req: Request, res: Response) => {
  res.redirect('http://localhost:3000/admin');
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});