import express from 'express';
import { Response,Request } from 'express';
const router= require('./routes/routes');
const dbsetup = require("./db/dbSetup");

const app = express();




dbsetup();

app.use(express.urlencoded({extended: false}))
app.use(express.json())


    


    app.use("/",router)    
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})
