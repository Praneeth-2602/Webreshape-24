const mongoose = require('mongoose')



const connectDB = (url)=>{
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // Remove useCreateIndex and useFindAndModify options
        // useCreateIndex: true,
        // useFindAndModify: false,
        user: 'lokesh',
        pass: 'webreshape24',
        dbName: 'webreshape'
      });
}


module.exports = connectDB