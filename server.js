const db = require('./config/connection')
const {User} = require('./models')

const express = require('express')
const app = express()
const PORT = '6135'

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//don't forget express stuff
const seedUsers = async () => {
    await User.deleteMany({})

    userData = [
        {
            username: 'npokrandt',
            email: 'npokrandt919@gmail.com'
        },
        {
            username: 'stormyStan',
            email: 'stan@gmail.com'
        },
        {
            username: 'harris',
            email: 'harris@gmail.com'
        },
        {
            username: 'sparrow',
            email: 'meowmeow@gmail.com'
        },
        {
            username: 'octopatamus',
            email: 'instructorj@gmail.com'
        },
    ]

    console.log('seeding users')

    await User.insertMany(userData)
}

const seedThoughts = async () => {

}


const init = async () => {
    //seedUsers()

    //console.log(certainUser)
}

//init()

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    })
})