const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    addres:{
        type: String
    },
    email_address:{
        type: String
    },
    contact_no: {
        type: String
    },
    password: {
        type: String
    }
},{
    collation: 'useraccounts'
})

module.exports = User = mongoose.model('users',UserSchema)