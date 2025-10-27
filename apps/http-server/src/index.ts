import express from "express";

const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hi there");
})


app.listen(3000)