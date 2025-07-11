import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { connectToDB } from './config/db.js';
import User from './model/user.model.js';
dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/users", async (req, res) => {
    const user = req.body; // User will send this data

    if(!user.name || !user.email || !user.password || !user.display_pic){
        return res.status(400).json({ success:false, message: "Please fill out all the fields." });
    }

    const newUser = new User(user);

    try {
        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        console.error("Error in creating new user.", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
})

app.listen(5000, () =>{
    connectToDB();
    console.log('Server started at http://localhost:5000');
});