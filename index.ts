import { error } from 'console';
import express from 'express';
import { Response,Request } from 'express';
import { Users } from './models/users';
const router= require('./routes/routes');
const dbsetup = require("./db/dbSetup");
const Userss=require("./models/users");


const app = express();






app.use(express.json())



// get the user data as a response
app.get("/users", async(request, response, next) => {
    Users.query().then((users: any)=>{
      response.json(users)
    })
    
    })
  


app.get('/users/:id', async (req, res, next) => {
    try {
        const {id} = req.params
        const user = await Users.query().findById(id)
        res.json(user)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})



//Inserting data into db

app.post('/users/post',async(req,res)=>{
    try{      
       const users = await Users.query().insert({
          username: "Akshay",
          email:"Aks@gmail.com",
          password:"ak$1"
        });
       res.json(users);
  
    }
    catch(err) {
       console.error(err);
       return res.json({success: false, message: 'An error occurred, please try again later.'});
    };
  });





//Deleting data using id
app.delete('/users/:id', async(req,res,next)=>{
    try{
      const{ id }=req.params;
      const users = await Users.query().deleteById(id);
      res.json(users);
 
    }catch(err){
       console.error(err);
       res.status(500).json(err);
    }
 
 });



    // app.use("/",router)    
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');

})

dbsetup();