const router = require('express').Router()
const {Thought, User} = require('../models')

router.get('/', async (req, res) => {
    try {
        const thoughts = await Thought.find({})

        res.status(200).json(thoughts)
    } catch (err) {
        res.status(400).json(err);
    } 
})

router.post('/', async (req, res) => {
    try {
        const newThought = await Thought.create({
            thoughtText: req.body.thoughtText,
            username: req.body.username
        })

        const user = await User.updateOne({
            _id: req.body.userId
        },
        {
            $push: {'thoughts': newThought._id}
        })

        res.status(201).json({newThought, user})
    }  catch (err) {
        res.status(400).json(err); 
    }
})
module.exports = router