/*
	Install npm 
	express: Restart app automatically
	morgan: To log HTTP request and errors
	cors: Allow CORS
	mongoose: Mongodb library 
	nodemon: Restart app automatically
	dotenv: Allow enviroment variables
	body-parse: Allow to process data sent in HTTP request body
*/
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./src/mongodb/connection');
const userRouter = require('./src/routers/user.routers');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(userRouter);

app.listen(PORT, async () => {
	connectDB();
	console.log(`Server running at: ${PORT}`);
});