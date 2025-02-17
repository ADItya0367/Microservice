const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const posts = {};

// Route to get all events (current state of posts)
app.get('/posts', (req, res) => {

        res.send(posts);
});

// Route to handle events
app.post('/events', (req, res) => {
    const { type, data } = req.body;

    console.log('Received Event:', type, data);

    if (type === 'postCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
    }

    if (type === 'commentCreated') {
        const { id, content, postId ,status} = data;
        const post = posts[postId];

        if (!post) {
            console.log(`Post with id ${postId} not found`);
            return res.status(404).send({ error: 'Post not found' });
        }

        post.comments.push({ id, content,status });
    }
    console.log(posts);
    res.send({});
});


app.listen(4002, () => {
    console.log('Query service listening on port 4002');
});
