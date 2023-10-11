const router = require('express').Router()

router.get('/', (req, res) => {
    console.log(req)
    res.end()
})

module.exports = router