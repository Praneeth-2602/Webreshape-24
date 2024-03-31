const mongoose = require('mongoose');
const { Schema } = mongoose

const borrowerSchema = new Schema({ 
    name:{
        type:String,
        required:true
    },
    bookTitle:{ 
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Borrower', borrowerSchema)