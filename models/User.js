const {Schema, model, default: mongoose} = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        match: [/.*/, 'please fill in a valid email address']      
    },
    /*thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
    }],*/
    friends: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

//virtual for friend count
const User = model("User", userSchema)

module.exports = User