
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// routes
app.get('/', (req, res) => {
    res.send('hello')
})


mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://admin:admin@gng.g9rq1cs.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    app.listen(3000, ()=> {
        console.log("hello, again.")
    })
    console.log('connectd to MongoDB')
}).catch((error) => {
    console.log(error)
})