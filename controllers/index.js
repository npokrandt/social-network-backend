/*
routes needed:
    
    api/thoughts:      
        get by id
        update by id
        delete by id (and maybe remove thougts)

        :thoughtId/reactions:
            post a new thought
            delete to thought by its id
*/

const router = require('express').Router()

const userRoutes = require('./userRoutes')
const thoughtRoutes = require('./thoughtRoutes')

router.use('/api/users', userRoutes)
router.use('/api/thoughts', thoughtRoutes)

module.exports = router