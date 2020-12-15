'use strict';

const express = require('express');
const router = express.Router();

router.post('/signup', async (req, res) => {

    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = new Users(req.body);
        const record = await user.save(req.body);
        res.status(201).json(record);
    } catch (e) { res.status(403).send("Error Creating User"); }
});

router.post('/signin', async (req, res) => {

    try {
        const user = await Users.findOne({ username: username });
        if(user){
            const valid = await bcrypt.compare(password, user.password);
            if(valid){
                res.status(201).json(`${user.username}`);
            } else {
                throw new Error('Invalid Password');
            }
            } else {
                throw new Error('Invalid User');
            }
    } catch (error) {
        // res.status(403).send('Invalid Login');
        res.status(403).send(error);
    }
    res.status(200).json('Authenticated');
});

module.exports = router;