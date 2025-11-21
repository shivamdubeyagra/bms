import express from "express";
import {client} from "@repo/db/client";
const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hi there Shivam and Ram Pukar and Rajendra Sir");
})

app.post("/signup",async(req,res)=>{
    const {username,password} = req.body;
    const user = await client.user.create({
        data:{
            username,
            password
        }
    })
    res.json({
        message:"User created",
        user
    });
})


app.listen(3002,()=>{
    console.log("Server started on port 3002");
})