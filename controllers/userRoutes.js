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
        const users = await User.findById({
            _id: req.params.user_id
        })

        res.status(200).json(users)
    }  catch (err) {
        res.status(400).json(err);
    }   
})

module.exports = router