{/*import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


export const connectDB = async ()=>{
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI); 
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch(err) {
      console.log(`Error: ${err.message}`);
      process.exit(1);
    }
}*/}
const mongoose = require('mongoose');

const ConnectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/salon', {
      useNewUrlParser: true,
      userUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch(err) {
    console.error(err.message);
    proq.exit(1);
  }
};
module.exports = ConnectDB;
