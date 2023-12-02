
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productmodels.js')
const app = express()


app.use(express.json())


// routes
app.get('/', (req, res) => {
    res.send('hello')
})

app.post('/product',async (req, res) => {
    try {
const product =  await Product.create(req.body)
res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})


mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://admin:admin@gng.g9rq1cs.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    app.listen(3000, ()=> {
        console.log("hello, again.")
    })
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log(error)
})