const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// now we will implement two different routes

// 1. GET /api/query

app.get('/events', (req, res) => {
    res.send(posts);
}); 

app.post('/events', (req, res) => {
    const {type,data}= req.body;
    if(type === 'postCreated'){
        const {id,title} = data;
        posts[id] = {id,title,comments:[]};
        
    }
    if(type === 'commentCreated'){
        const {id,content,postId} = data;
        const post = posts[postId];
        post.comments.push({id,content});
    }
    res.send({}); // send back an empty object
}
);


app.listen(4002, () => {
    console.log('Query service listening on port 4002');
});
// 2. POST /api/query