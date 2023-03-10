import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'
import UploadRoute from './Routes/UploadRoute.js'

// Routes

const app = express();

// to serve images for public
app.use(express.static('public')); 
app.use('/images', express.static('images'));

//  MiddleWare
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())
dotenv.config()

// DB connection
mongoose.connect(
    process.env.MONGO_DB, {useNewUrlParser:true, useUnifiedTopology:true}
    ).then(()=>app.listen(5000,()=>console.log(`listning to port ${process.env.PORT}`)))
    .catch((err)=>console.log(err))

//  usage of routes

app.use('/auth',AuthRoute)
app.use('/user',UserRoute)
app.use('/post',PostRoute)
app.use('/upload',UploadRoute)