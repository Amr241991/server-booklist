import express from 'express';
import {PORT,mongoDBURL} from './config.js';
import { mongoose, trusted } from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRouter from './routes/bookRouter.js'
import cors from 'cors'

const app = express();

    app.use(express.json())

    app.use(cors({
        origin:"http://localhost:5173",
        methods:["GET",'POST','DELETE','PUT'],
        allowedHeaders:['Content-Type']
    }))

app.use('/books',booksRouter)


mongoose.connect(mongoDBURL)
    .then(()=>{
    console.log(`App connected whith database`);
    app.listen(PORT,()=>{
        console.log(`App is listening to port: ${PORT}`);
    })
}).catch((error)=>{
    console.log(error);
})