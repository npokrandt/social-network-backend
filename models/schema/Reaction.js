const {Schema} = require('mongoose')

const reactionSchema = new Schema ({
    reactionId: {
        //type: Schema.Types.ObjectId,
        //default: new Schema.Types.ObjectId()
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