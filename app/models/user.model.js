var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        // validate: schemaValidator.nameValidator
    },
    lastname: {
        type: String,
        required: true,
        // validate: schemaValidator.nameValidator
    },
    username: {
        type: String,
        required: true,
        unique: "User with Username `{VALUE}` already present",
        // validate: schemaValidator.nameValidator
    },
    email: {
        type: String,
        required: true,
        unique: "User with Email Address `{VALUE}` already present",
        // validate: schemaValidator.emailValidator
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('User', userSchema);