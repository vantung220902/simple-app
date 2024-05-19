'use strict';

const express = require('express');
const os = require('os');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send(`<h2 style="color: red; text-align: center">Tung Nguyen AWS From ECS ${os.hostname()} Hi Hi</h2>`);
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`)