const {Schema, Types} = require('mongoose')
const dayjs = require('dayjs')

const reactionSchema = new Schema ({
    reactionId: {
        type: Types.ObjectId,
        default: new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: { 
        type: Date,
        default: Date.now,
        get: (d) => {return dayjs(d).format('MM/DD/YYYY')}
    }
},
{
    toJSON: {
        getters: true
    }
})

module.exports = reactionSchema