const Router = require('express');
const {getUser, getUsers, createUser} = require('../controllers/user.controllers.js');

const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.send('Welcome!');
});

userRouter.get('/api/user/:userID', getUser);
userRouter.get('/api/users', getUsers);
userRouter.post('/api/create', createUser);

module.exports = userRouter;