var express = require('express');
var app = express();


app.get('/supported-operations', function(req, res) {
  var operations = {
    "/": "division",
    "+": "addition",
    "-": "subtration",
    "*": "multiplication"
  };
  res.json(operations);
});

app.get('/square?:number', function(req, res) {
  var result = {'result': req.query.number ** 2};
  res.json(result);
});

app.listen(3000, function() {
  console.log('Server started!');
});
