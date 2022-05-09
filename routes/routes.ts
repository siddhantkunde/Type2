import express,{ Response,Request } from 'express';
//const express = require('express');
const router= express.Router();
const Userss = require('../models/users')




// router.get('/details/:id',(req:Request, res:Response) => {
//     res.send({
//         message:"Hello Brother!",
//         id: req.params.id,
//         name:req.params.name
        
//     })
    
// })
 router.get('/users/:id', async (req, res) => {
    try {
        const {id} = req.params
        const user = await Userss.query().findById(id)
        res.json(user)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}) 

export{
    router
}