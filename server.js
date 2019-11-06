const express = require('express');

const carsRouter = require('./data/carsRoute');

const server = express();

server.get('/', (req, res) => {
    res.send(`<h2>IYou should come see what carsI have bruh</h2>`)
})

server.use(express.json());

server.use('/api/cars', carsRouter);
module.exports = server 