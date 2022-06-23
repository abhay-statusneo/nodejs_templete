var express = require('express');
var nunjucks = require('nunjucks');
var converter = require("./app/converter");

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

app.get("/rgbToHex", function(req, res) {

    var red   = parseInt(req.query.red, 10);
    var green = parseInt(req.query.green, 10);
    var blue  = parseInt(req.query.blue, 10);
    var hex = converter.rgbToHex(red, green, blue);
    res.send(hex);
  
  });
  
  app.get("/hexToRgb", function(req, res) {
  
    var hex = req.query.hex;
    var rgb = converter.hexToRgb(hex);
    res.send(JSON.stringify(rgb));
  
  });

app.listen(4000, function() {
    console.log('templete app is running on 4000 port')
})