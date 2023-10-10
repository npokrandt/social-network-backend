const {Schema} = require('mongoose')

const reactionSchema = {
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
        Date,
        //set: d = new Date(),
        //get: d => dayjs(d).format('MM/DD/YYYY')
    }
}

module.exports = reactionSchema