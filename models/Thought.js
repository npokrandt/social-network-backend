const {Schema, model} = require('mongoose')
const reactionSchema = require('./schema/Reaction')
const dayjs = require('dayjs')

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        Date,
        //set: t => new Date(),
        //get: d => dayjs(d).format('MM/DD/YYYY')
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
    
})

const Thought = model("Thought", thoughtSchema)

module.exports = Thought