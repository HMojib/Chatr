const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');

function generateToken(user) {
    return jwt.sign(user, config.secret, {
        expiresIn: 604800 // in seconds
    });
}

exports.login = function (req, res, next) {
    const userInfo = {
        _id: req.user._id,
        firstName: req.user.profile.firstName,
        lastName: req.user.profile.lastName,
        email: req.user.email
    };
    res.status(200).json({
        token: `JWT ${generateToken(userInfo)}`,
        user: userInfo
    });
};

exports.register = function (req, res, next) {
    console.log('in register');
    const email = req.body.email;
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const password = req.body.password;

    if (!email) {
        return res.status(422).send({ error: 'You must enter an email address.' });
    }

    if (!firstName || !lastName) {
        return res.status(422).send({ error: 'You must enter your full name.' });
    }

    if (!password) {
        return res.status(422).send({ error: 'You must enter a password.' });
    }

    User.findOne({ email }, (err, existingUser) => {
        if (err) { return next(err); }

        if (existingUser) {
            return res.status(422).send({ error: 'That email address is already in use.' });
        }

        const user = new User({
            email,
            password,
            profile: { firstName, lastName }
        });

        user.save((err, user) => {
            if (err) { return next(err); }

            const userInfo = {
                _id: user._id,
                firstName: user.profile.first_name,
                lastName: user.profile.last_name,
                email: user.email
            };

            res.status(201).json({
                token: `JWT ${generateToken(userInfo)}`,
                user: userInfo
            });
        });
    });
};