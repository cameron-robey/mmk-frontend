'use strict';

// Import and initialise express
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// SET PORT TO DEPLOY SERVER TO
const port = 4500;

app.use(express.static(path.join(__dirname, '../build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});