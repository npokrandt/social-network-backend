const router = require('express').Router()
const {
    getThoughts,
    getOneThought,
    addThought,
    updateThought,
    deleteThought,
    addReactionToThought,
    deleteReactionFromThought
} = require('../../controllers/thoughtController')

//api/thoughts
router.route('/').get(getThoughts).post(addThought)

//api/thoughts/:thought_id
router.route('/:thought_id')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought)

//api/thoughts/:thought_id/reactions
router.route('/:thought_id/reactions').post(addReactionToThought)

//api/thoughts/:thought_id/reactions/reaction_id
router.route('/:thought_id/reactions/:reaction_id').delete(deleteReactionFromThought)

module.exports = router