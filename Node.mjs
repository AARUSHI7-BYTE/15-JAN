import express from 'express'
const app = express();
const PORT = 4000;

app.get("/contactus",(req,res)=>{
    res.send("Contact us at contact@contact.com")
})
app.listen(PORT,(req,res)=>{
    console.log("Server running")
})

app.get("/home",(req,res)=>{
    res.send("This is home page")
})