// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";

// app config - create app instance. this allows us to create api 
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
// db config
const connection_url = "mongodb+srv://admin:LHIMCehJ5a8B5nXP@cluster0.qaifi.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose.connect(connection_url,{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology: true
})
// ???

// api routes
app.get("/",(req,res)=>res.status(200).send("hello world"));

app.post("/messages/new",(req, res)=>{
    const dbMessage = req.body
    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

// listen
app.listen(port, ()=> console.log(`listening to the port: ${port}`));