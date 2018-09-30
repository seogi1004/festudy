const path = require('path')
const express = require('express');
const app = express();

app.use(express.static(path.resolve('dist')));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});