const express = require('express')
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const app = express()
 
const commentsByPostId = {}

app.use(bodyParser.json())
app.use(cors())
app.get('/posts/:id/comments',(req,res)=>{
    res.send(commentsByPostId[req.params.id] || [])
})

app.post('/posts/:id/comments', async (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;
    const comments = commentsByPostId[req.params.id] || [];
    comments.push({ id: commentId, content });
    commentsByPostId[req.params.id] = comments;

    try {
        await axios.post('http://localhost:4005/events', {
            type: 'CommentCreated',
            data: {
                id: commentId,
                content,
                postId: req.params.id
            }
        });
    } catch (error) {
        console.error('Error posting to event bus:', error.message);
    }
    
    res.status(201).send(comments);
});

app.post('/events', (req, res) => {
    console.log('Received Event from event bus via comment service', req.body.type);
    res.send({});
});


const port = 4001
app.listen(port,()=>{
    console.log(`Server is up on port ${port}`)
})
