const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bodyParser.json());

app.post('/events', async (req, res) => {
    const event = req.body;  /// event received from the service
    
    try {
        await axios.post('http://localhost:4000/events', event); // posts service
    } catch (error) {
        console.error('Error posting to posts service:', error.message);
    }

    try {
        await axios.post('http://localhost:4001/events', event); // comments service
    } catch (error) {
        console.error('Error posting to comments service:', error.message);
    }

    try {
        await axios.post('http://localhost:4002/events', event); // query service
    } catch (error) {
        console.error('Error posting to query service:', error.message);
    }
    
    try {
        await axios.post('http://localhost:4003/events', event); // query service
    } catch (error) {
        console.error('Error posting to query service:', error.message);
    }
    
    res.send({ status: 'everything is fine !!' });
});

app.listen(4005, () => {
    console.log('Event bus is running on port 4005');
});
