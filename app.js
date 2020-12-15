// 'use strict';

// 3rd Party Resources
// const express = require('express');
// const bcrypt = require('bcrypt');
// const base64 = require('base-64');
// const mongoose = require('mongoose');

// Prepare the express app
// const app = express();

// Process JSON input and put the data on req.body
// app.use(express.json());

// Process FORM intput and put the data on req.body
// app.use(express.urlencoded({ extended: true }));

//require in routes file and 
// const routes = require('./auth/routes/signin');

// app.use('./routes');
//app.use uses on ALL routes
// const middleware = require('./middleware/middleware.js');


// Create a mongoose model
// const usersSchema = mongoose.Schema({
//   username: { type: String, required: true },
//   password: { type: String, required: true },
// });
// const Users = mongoose.model('users', usersSchema);

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup usernmae=john password=foo
// app.post('/signup', async (req, res) => {

//   try {
//     req.body.password = await bcrypt.hash(req.body.password, 10);
//     const user = new Users(req.body);
//     const record = await user.save(req.body);
//     res.status(201).json(record);
//   } catch (e) { res.status(403).send("Error Creating User"); }
// });


// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
// app.post('/signin', middleware, async (req, res) => {
//     res.status(200).json('Authenticated');
// }


// mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(3000, () => console.log('server up'));
//   })
//   .catch(e => console.error('Could not start server', e.message));