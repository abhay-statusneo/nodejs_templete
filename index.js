var express = require('express');
var nunjucks = require('nunjucks');

var app =express();

var env = nunjucks.configure(['views/'], {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    var data = {
        name: 'Abhay Singh',
        age: 29,
        address: 'Delhi'
    }
    res.send(200, JSON.stringify(data))
})

app.listen(4000, function() {
    console.log('templete app is running on 4000 port')
})