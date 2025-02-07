const express = require('express')
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()


const posts = {};

app.use(bodyParser.json())
app.use(cors())

app.get('/posts',(req,res)=>{
    res.send(posts)
})

app.post('/posts',(req,res)=>{
   const id = randomBytes(4).toString('hex')
    const {title} = req.body
    posts[id] = {
        id,title
    }
    res.status(201).send(posts[id])
})

const port = 4000
app.listen(port,()=>{
    console.log(`Server is up on port ${port}`)
})