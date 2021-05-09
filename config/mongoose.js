var mongoose = require('mongoose');
// Define the Mongoose configuration method
module.exports = function () {
    // Use Mongoose to connect to MongoDB
    
    const db = mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        }).then(() => console.log('DB Connected!'))
        .catch(err => {
            console.log("Mongo Error", err);
            // console.log('Error');
        });

    require("../app/models/user.model");

    // Return the Mongoose connection instance
    return db;
};