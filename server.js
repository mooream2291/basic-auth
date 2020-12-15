'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const mongoose = require('mongoose');
const signIn = require('./auth/routes/signin');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(signIn);

mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(3000, () => console.log('server up'));
//   })
//   .catch(e => console.error('Could not start server', e.message));

module.exports = {
    server: app,
    start: port => { // Takes port from index.js, starts server.
      if(!port) { throw new Error('missing port');}
      app.listen(port, () => {
        console.log(`listening on ${port}`);
      });
    },
  };