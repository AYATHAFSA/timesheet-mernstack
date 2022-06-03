const mongoose = require('mongoose');


const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://ayat:ayat@timesheet.8z36l.mongodb.net/?retryWrites=true&w=majority',
            {
            useNewUrlParser: true,
            useUnifiedTopology: true
            }
        );
        console.log('Database connection success');
    }catch (err){
        console.log(err);
    }
};

module.exports = connectDB;