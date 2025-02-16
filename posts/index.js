const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();

const posts = {};

app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = { id, title };

    try {
        await axios.post('http://localhost:4005/events', {
            type: 'PostCreated',
            data: { id, title },
        });
    } catch (error) {
        console.error('Error posting event to event bus:', error.message);
    }

    res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
    console.log('Received Event from event bus via post service:', req.body.type, req.body.data);
    res.send({});
});


const port = 4000;
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
