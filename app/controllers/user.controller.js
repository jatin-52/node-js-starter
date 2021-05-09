const express = require('express'),
router = express.Router(),
jwt = require('jsonwebtoken'),
bcrypt = require('bcryptjs');

const User = require('mongoose').model('User');

module.exports = {
    login: async function(req, res) {

        var user = await User.findOne({ 
            email: req.body.email
        });
        
        var output = await bcrypt.compare(req.body.password, user.password)

        console.log( "--output--", output );

        var token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: 86400 // expires in 24 hours
        });

        res.json({
            accessToken: token
        })
    },
    signUp: async function(req, res) {
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);

        var user = new User({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            username : req.body.username,
            email : req.body.email,
            password : hashedPassword,
            address : req.body.address
        });

        var output = await user.save();

        // console.log('--output--', output);

        var token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: 86400 // expires in 24 hours
        });

        console.log( '--user--', user );

        res.json({ accessToken: token });
    },
    me: async function(req, res) {
        var decoded = jwt.verify(req.body.accessToken, process.env.JWT_SECRET_KEY);
        var user = await User.findById( decoded.id );
        console.log( "--decoded--", decoded, user );
        res.json({
            userId   : user._id,
            firstname: user.firstname,
            lastname : user.lastname,
            username : user.username,
            email    : user.email,
            address  : user.address,
        });
    }
}
