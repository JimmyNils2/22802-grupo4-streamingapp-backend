//Install npm mongoose
const mongoose = require('mongoose');

const connectDB = () => {
  try {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGODB_URI);
    console.log('DDBB connected');
  }catch(e){
    console.log('DDBB error: '+e);
  }
}

module.exports = connectDB;