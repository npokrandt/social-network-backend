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

router.get('/:thought_id', async (req, res) => {
    try {
        const thought = await Thought.findById({
            _id: req.params.thought_id
        })

        if (thought !== null){
    
            res.status(200).json(thought)
        } else {
            res.status(404).send('thought not found')
        }

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

router.put('/:thought_id', async (req, res) => {
    try {
        const updateThought = await Thought.findByIdAndUpdate({
            _id: req.params.thought_id
        },
        {
            thoughtText: req.body.thoughtText,
        })

        if (updateThought !== null){
    
            res.status(200).json(updateThought)
        } else {
            res.status(404).send('thought not found')
        }

    } catch (err) {
        res.status(400).json(err);
    } 
})

router.delete('/:thought_id', async (req, res) => {
    try {
        const deleteThought = await Thought.findByIdAndDelete({
            _id: req.params.thought_id
        })

        if (deleteThought !== null){

            const user = await User.findOneAndUpdate({
                username: deleteThought.username
            },
            {
                $pull: {'thoughts': req.params.thought_id}
            })
    
            res.status(200).json({deleteThought, user})
        } else {
            res.status(404).send('thought not found')
        }

    } catch (err) {
        res.status(400).json(err);
    } 
})

//reaction routes
router.post('/:thought_id/reactions', async (req, res) => {
    try {
        const newReaction = {
            reactionBody: req.body.reactionBody,
            username: req.body.username
        }

        const updatedThought = await Thought.updateOne({
            _id: req.params.thought_id
        },{
            $push: {'reactions': newReaction}
        })

        res.status(201).json(updatedThought)
    }  catch (err) {
        res.status(400).json(err); 
    }
})

router.delete('/:thought_id/reactions', async (req, res) => {
    try {

        const thought = await Thought.findByIdAndUpdate({
            _id: req.params.thought_id
        },{
            $pull: {'reactions': {reactionId: req.body.reaction_id}}
        })

        res.status(200).json(thought)
    }  catch (err) {
        res.status(400).json(err); 
    }
})

module.exports = router