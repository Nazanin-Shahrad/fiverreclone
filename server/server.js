import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import gigRoute from './routes/gig.route.js';
import orderRoute from './routes/order.route.js';
import conversationRoute from './routes/conversation.route.js';
import messageRoute from './routes/message.route.js';
import reviewRoute from './routes/review.route.js';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import corsOptions from './config/corsOptions.js';


const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongoDB.")
    } catch(error){
        console.log(error)
    }
}

//middlewares
app.use(cors(corsOptions))
// app.use(cors({origin: "*" , credentials : true}))
// app.use(cors({origin: "https://fiverrclone-nazanin.netlify.app/" , credentials : true}))
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth" ,authRoute);
app.use("/api/users" ,userRoute);
app.use("/api/gigs" ,gigRoute);
app.use("/api/orders" ,orderRoute);
app.use("/api/conversations" ,conversationRoute);
app.use("/api/messages" ,messageRoute);
app.use("/api/reviews" ,reviewRoute);
app.use("/api" , (req,res)=> {
    res.send("hello from api")
})
app.use("/" , (req,res) => {
    res.send("hello")
})

app.use((err , req, res , next) => {
    const errorStatus = err.status || 500; 
    const errorMessage = err.message || " something went wrong";

    return res.status(errorStatus).send(errorMessage);
});
const port = process.env.PORT || 5000;
app.listen(port , () => {
    connect();
    console.log("Backend server is running !");
    console.log(`Example app listening on port ${port}!`)
})