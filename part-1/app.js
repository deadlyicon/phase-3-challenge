var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

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
  res.send(result);
});

app.post('/compute', function(req, res, next) {
  var total;
  // var reqBody = {
  //   "operator": "/",
  //   "operands": [5,3]
  // };

    console.log(req.body);
    var operands = JSON.parse(req.body.operands);
    var operator = req.body.operator;

    //maybe use regexp to remove brackets?

    console.log("1st shit", operator);
    console.log(operands[0]);
    console.log(operands[1]);

    switch(operator) {
      case '/':
        total = operands[0] / operands[1]
        break;
      case '+':
        total = operands[0] + operands[1]
        break;
      case '-':
        total = operands[0] - operands[1]
        break;
      case '*':
        total = operands[0] * operands[1]
        break;
      default:
        throw 'error": "invalid operator ?. Valid operators are /, +, -, *'
    }
  console.log("yolo", req.body);
  res.json({'total': total});
})

app.listen(3000, function() {
  console.log('Server started!');
});
