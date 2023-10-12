const router = require('express').Router()
const { User } = require('../models')

router.get('/', async (req, res) => {
    try {
        //console.log(req)
        const users = await User.find({})

        res.status(200).json(users)
    }  catch (err) {
        res.status(400).json(err);
    }   
})

router.get('/:user_id', async (req, res) => {
    try {
        const user = await User.findById({
            _id: req.params.user_id
        })


        if (user !== null){
    
            res.status(200).json(user)
        } else {
            res.status(404).send('user not found')
        }
    }  catch (err) {
        res.status(400).json(err);
    }   
}) 

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email
        })

        res.status(201).json(newUser)
    }  catch (err) {
        res.status(400).json(err);
    } 
})

router.put('/:user_id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            {
                _id: req.params.user_id
            },
            {
                username: req.body.username,
                email: req.body.email
            }
        )

        if (updatedUser !== null){
    
            res.status(200).json(updatedUser)
        } else {
            res.status(404).send('user not found')
        }
    }  catch (err) {
        res.status(400).json(err);
    } 
})

router.delete('/:user_id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete({
            _id: req.params.user_id
        })

        if (deletedUser !== null){
    
            res.status(200).json(deletedUser)
        } else {
            res.status(404).send('user not found')
        }
    }  catch (err) {
        res.status(400).json(err);
    } 
})

//routes to edit friend list

//add new friend
router.post('/:user_id/friends/:friend_id', async (req, res) => {
    try {
        const _id = req.params.user_id
        const friend_id = req.params.friend_id
        const newFriend = await User.updateOne(
            {
                _id: _id
            },
            {
                $push: {'friends': friend_id}
            },
        )

        if (newFriend !== null){
    
            res.status(201).json(newFriend)
        } else {
            res.status(404).send('user not found')
        }

        res.end()
    }  catch (err) {
        res.status(400).json(err);
    } 
})

//delete existing friend
router.delete('/:user_id/friends/:friend_id', async (req, res) => {
    try {
        const deletedFriend = await User.findByIdAndUpdate(
            {
                _id: req.params.user_id
            },
            {
                $pull: {'friends': req.params.friend_id}
            }
        )

        if (deletedFriend !== null){
    
            res.status(200).json(deletedFriend)
        } else {
            res.status(404).send('user not found')
        }
    }  catch (err) {
        res.status(400).json(err);
    } 
})

module.exports = router