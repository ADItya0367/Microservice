const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bodyParser.json());

app.post('/events', async (req, res) => {
    const event = req.body;  /// event received from the service
    
    await axios.post('http://localhost:4000/events', event); // posts the event to posts service
    await axios.post('http://localhost:4001/events', event); // comments service
    await axios.post('http://localhost:4002/events', event); // query service
    
    res.send({ status: 'everything is fine !!' });
    });

app.listen(4005, () => {
    console.log('Event bus is running on port 4005');
});



    // event bus

// problem : 