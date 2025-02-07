const express = require('express')
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
 
const commentsByPostId = {}

app.use(bodyParser.json())
app.use(cors())
app.get('/posts/:id/comments',(req,res)=>{
    res.send(commentsByPostId[req.params.id] || [])
})

app.post('/posts/:id/comments',(req,res)=>{ 
    const commentId = randomBytes(4).toString('hex')
    const {content} = req.body
    const comments = commentsByPostId[req.params.id] || []
    comments.push({id:commentId,content})
    commentsByPostId[req.params.id] = comments
    res.status(201).send(comments)
})

const port = 4001
app.listen(port,()=>{
    console.log(`Server is up on port ${port}`)
})
