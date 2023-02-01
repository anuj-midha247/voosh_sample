import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRouter from './routes/user-routes';

dotenv.config();
const app = express();
app.use(express.json());

app.use("/", userRouter);
mongoose.connect(
    `mongodb+srv://amidha96:${process.env.MONGODB_PASSWORD}@cluster0.mojxrb3.mongodb.net/?retryWrites=true&w=majority`
)
    .then(() =>
        app.listen(5000, () =>
            console.log("Connected to  Database and Server running")
    )
)
.catch((e)=>console.log(e))