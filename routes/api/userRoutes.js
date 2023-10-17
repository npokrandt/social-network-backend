const router = require('express').Router()
const { 
    getUsers,
    getOneUser,
    addUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController')

//api/users
router.route('/').get(getUsers).post(addUser)

//api/users/:user_id
router.route('/:user_id')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)

//api/users/:user_id/friends/:friend_id
router.route('/:user_id/friends/:friend_id').post(addFriend).delete(deleteFriend)

module.exports = router