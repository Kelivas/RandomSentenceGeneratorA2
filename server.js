'use strict';

var express = require('express');
var path = require('path');
// initiates an instance of express.
var app = express();
var rootPath = path.normalize(__dirname);

app.use(express.static(rootPath));
// * means wild card.
app.get('*',(req, res) => {
    res.send(`${rootPath}/index.html`);
});

app.listen(9000,() => {console.log('I live');});
