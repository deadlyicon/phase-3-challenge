var express = require('express');
var app = express();

app.get('/api/supported-operations', function(req, res) {
  var operations = {
    "/": "division",
    "+": "addition",
    "-": "subtration",
    "*": "multiplication"
  }
  res.json(operations)
});

app.listen(3000, function() {
  console.log('Server started!');
});
